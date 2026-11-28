QBANK("en", "l3-mat-statistica-bivariata", {
  "f": [
    { "type": "mc", "q": "What is the name of the graph in which each individual is a point with coordinates (x, y)?", "options": ["scatter plot", "histogram", "pie chart"], "answer": 0, "explain": "The scatter plot shows how two variables behave together." },
    { "type": "tf", "q": "If y tends to increase as x increases, the correlation is positive.", "answer": true, "explain": "Positive correlation: the points go up; negative: they go down." },
    { "type": "mc", "q": "A correlation coefficient r = 1 means that the points…", "options": ["lie exactly on an increasing line", "are scattered at random", "lie on a decreasing line"], "answer": 0, "explain": "r = 1 is perfect positive correlation; r = −1 perfect negative correlation." },
    { "type": "num", "q": "What is the mean of x for the values 2, 4, 6, 8?", "answer": 5, "explain": "(2 + 4 + 6 + 8)/4 = 5." },
    { "type": "text", "q": "What is the difference between the observed value and the value predicted by the line called?", "answer": ["residual", "the residual", "a residual", "error"], "explain": "It is the residual eᵢ = yᵢ − (a + bxᵢ)." }
  ],
  "m": [
    { "type": "num", "q": "A regression line has a = 1 and b = 3. What does it predict for x = 5?", "answer": 16, "explain": "y = 1 + 3·5 = 16." },
    { "type": "num", "q": "If σₓᵧ = 12, σₓ = 3 and σᵧ = 5, what is r?", "answer": 0.8, "tol": 0.001, "explain": "r = 12/(3·5) = 12/15 = 0.8." },
    { "type": "mc", "q": "Which value of r indicates the strongest linear relationship?", "options": ["0.3", "−0.85", "0.6"], "answer": 1, "explain": "What matters is the absolute value: |−0.85| is the closest to 1 (the sign only gives the direction)." },
    { "type": "tf", "q": "A very high correlation between two variables proves that one is the cause of the other.", "answer": false, "explain": "Correlation does not imply causation: there may be a confounding factor, reverse causation or chance." },
    { "type": "num", "q": "A line has gradient b = 0.5 and passes through the centroid (10, 20). What is a?", "answer": 15, "explain": "a = ȳ − b·x̄ = 20 − 0.5·10 = 15." }
  ],
  "d": [
    { "type": "num", "q": "Given (1, 3), (2, 5), (3, 7): what is the gradient b of the regression line?", "answer": 2, "explain": "The points lie on the line y = 2x + 1, so b = 2 (σₓᵧ = 4/3, σₓ² = 2/3)." },
    { "type": "mc", "q": "Anscombe's quartet teaches us that…", "options": ["identical statistics can hide very different graphs: you have to plot the data", "r is always 0.82", "outliers never affect the line"], "answer": 0, "explain": "Four data sets with the same mean, variance, r and line, but very different clouds of points." },
    { "type": "tf", "q": "A single anomalous value very far from the others can change the regression line a lot.", "answer": true, "explain": "Residuals are squared: distant points carry enormous weight in least squares." },
    { "type": "num", "q": "If r = −0.6, what is the coefficient of determination r²?", "answer": 0.36, "tol": 0.001, "explain": "r² = 0.36: squaring removes the sign." },
    { "type": "mc", "q": "Predicting the value of y for an x far outside the range of the data is called…", "options": ["extrapolation", "interpolation", "normalisation"], "answer": 0, "explain": "Extrapolation is risky; interpolation (within the range) is more reliable." }
  ]
});
