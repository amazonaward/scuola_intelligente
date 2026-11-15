QBANK("en", "m1-mat-potenze", {
 "f": [
  {
   "type": "mc",
   "q": "How do you write 7 × 7 × 7 as a power?",
   "options": [
    "7³",
    "3⁷",
    "7 × 3"
   ],
   "answer": 0,
   "explain": "The factor 7 is repeated 3 times: base 7, exponent 3."
  },
  {
   "type": "tf",
   "q": "Zero raised to the power 5 gives 0.",
   "answer": true,
   "explain": "0 × 0 × 0 × 0 × 0 = 0: with base 0 and an exponent other than 0 the result is 0."
  },
  {
   "type": "num",
   "q": "A square has a side of 8 cm. What is its area in cm²?",
   "answer": 64,
   "unit": "cm²",
   "explain": "Area = 8² = 8 × 8 = 64 cm²."
  },
  {
   "type": "mc",
   "q": "How many zeros does the number 10⁷ (ten million) have?",
   "options": [
    "6",
    "7",
    "8"
   ],
   "answer": 1,
   "explain": "10ⁿ is 1 followed by n zeros: 10⁷ = 10,000,000, with 7 zeros."
  },
  {
   "type": "text",
   "q": "What is the number 10¹⁰⁰ (1 followed by 100 zeros) called?",
   "answer": [
    "googol",
    "a googol",
    "the googol"
   ],
   "explain": "It is called a googol; the name Google comes from it."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "In a knockout tournament there are 64 players and half are eliminated each round. How many rounds are needed to find the winner?",
   "answer": 6,
   "unit": "rounds",
   "explain": "64 = 2⁶: halving each time, 64 → 32 → 16 → 8 → 4 → 2 → 1, that is 6 rounds."
  },
  {
   "type": "mc",
   "q": "Which expression is equal to 5⁴ × 5²?",
   "options": [
    "5⁶",
    "5⁸",
    "25⁶"
   ],
   "answer": 0,
   "explain": "Same base: add the exponents, 4 + 2 = 6."
  },
  {
   "type": "tf",
   "q": "7⁵ : 7⁵ = 0",
   "answer": false,
   "explain": "A number divided by itself gives 1: 7⁵ : 7⁵ = 7⁰ = 1."
  },
  {
   "type": "num",
   "q": "What is 4.5 × 10³?",
   "answer": 4500,
   "explain": "10³ = 1000 and 4.5 × 1000 = 4500."
  },
  {
   "type": "order",
   "q": "Put the steps for calculating 3 + 2³ × 4⁰ in order.",
   "items": [
    "Work out the powers: 2³ = 8 and 4⁰ = 1",
    "Do the multiplication: 8 × 1 = 8",
    "Do the addition: 3 + 8 = 11"
   ],
   "explain": "Powers first, then multiplication, finally addition: the result is 11."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Which equality is WRONG?",
   "options": [
    "2⁴ × 2⁴ = 2⁸",
    "(2⁴)² = 2⁸",
    "2⁴ + 2⁴ = 2⁸"
   ],
   "answer": 2,
   "explain": "2⁴ + 2⁴ = 16 + 16 = 32 = 2⁵, not 2⁸. There are no rules for sums."
  },
  {
   "type": "num",
   "q": "Water lily leaves on a lake double the covered area every day. After 30 days the whole lake is covered. After how many days was only half of the lake covered?",
   "answer": 29,
   "unit": "days",
   "explain": "Since the area doubles every day, the day before it was half covered: 30 − 1 = 29."
  },
  {
   "type": "num",
   "q": "One file takes up 2¹² bytes and another 2⁹ bytes. How many times larger is the first than the second?",
   "answer": 8,
   "explain": "2¹² : 2⁹ = 2¹²⁻⁹ = 2³ = 8."
  },
  {
   "type": "mc",
   "q": "What is the quickest way to calculate 5⁴ × 2⁴?",
   "options": [
    "(5 + 2)⁴ = 7⁴",
    "(5 × 2)⁴ = 10⁴ = 10,000",
    "10⁸"
   ],
   "answer": 1,
   "explain": "Same exponent: multiply the bases and keep the exponent 4. 5 × 2 = 10, so 10⁴ = 10,000."
  },
  {
   "type": "tf",
   "q": "Marco writes 2³ × 3³ = 6⁶. The calculation is correct.",
   "answer": false,
   "explain": "With the same exponent you multiply the bases and the exponent stays the same: 2³ × 3³ = 6³ = 216."
  }
 ]
});
