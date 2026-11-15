QBANK("fr", "lib-motore-elettrico", {
 "f": [
  {
   "type": "tf",
   "q": "Le moteur électrique fonctionne en brûlant de l’essence.",
   "answer": false,
   "explain": "Il ne brûle rien : il utilise le courant électrique et des aimants."
  },
  {
   "type": "mc",
   "q": "Lequel de ces objets contient un moteur électrique ?",
   "options": [
    "Une pierre",
    "Un cahier",
    "Une machine à laver"
   ],
   "answer": 2,
   "explain": "La machine à laver a un moteur électrique qui fait tourner le tambour."
  },
  {
   "type": "text",
   "q": "Comment s’appelle la « tige » d’acier au centre du rotor, qui sort du moteur et fait tourner l’hélice ?",
   "answer": [
    "arbre",
    "l’arbre",
    "l'arbre",
    "axe",
    "l'axe"
   ],
   "explain": "L’arbre tourne avec le rotor et transmet le mouvement à l’extérieur du moteur."
  },
  {
   "type": "num",
   "q": "Le rotor de la leçon a trois bras de fer et chaque bras a une bobine. Combien y a-t-il de bobines en tout ?",
   "answer": 3,
   "explain": "Une bobine par bras : 3 bras, 3 bobines."
  }
 ],
 "m": [
  {
   "type": "mc",
   "q": "Comment peut-on fabriquer un électroaimant simple ?",
   "options": [
    "En plantant un clou dans une pomme",
    "En enroulant du fil de cuivre autour d’un clou et en le reliant à une pile",
    "En attachant une pierre à un fil de laine"
   ],
   "answer": 1,
   "explain": "Avec le courant dans le fil enroulé, le clou devient un aimant et attire les trombones."
  },
  {
   "type": "num",
   "q": "Un petit moteur électrique a un rendement de 90 % : il transforme en mouvement 90 % de l’énergie reçue. S’il reçoit 200 joules, combien de joules deviennent du mouvement ?",
   "answer": 180,
   "unit": "J",
   "explain": "90 % de 200 = 200 × 0,9 = 180 joules."
  },
  {
   "type": "tf",
   "q": "Les balais amènent le courant de la pile jusqu’aux bobines qui tournent.",
   "answer": true,
   "explain": "Les balais frottent sur le collecteur : ainsi le courant arrive aux bobines du rotor."
  },
  {
   "type": "order",
   "q": "Remets dans l’ordre le trajet du courant dans le petit moteur.",
   "items": [
    "Pôle + de la pile",
    "Balai",
    "Collecteur",
    "Bobine du rotor"
   ],
   "explain": "Le courant sort de la pile, passe par le balai et le collecteur, puis entre dans la bobine."
  }
 ],
 "d": [
  {
   "type": "mc",
   "q": "Si le collecteur se cassait et n’inversait plus le courant, que ferait le rotor ?",
   "options": [
    "Il tournerait plus vite",
    "Il s’arrêterait devant l’aimant qui l’attire",
    "Il tournerait à l’envers",
    "Il deviendrait un aimant fixe qui tourne sans s’arrêter"
   ],
   "answer": 1,
   "explain": "Sans inversion du courant, la bobine resterait attirée par l’aimant et le rotor se bloquerait."
  },
  {
   "type": "num",
   "q": "Un moteur à essence a un rendement de 30 %, un moteur électrique de 90 %. Pour obtenir 270 joules de mouvement, combien d’énergie de plus le moteur à essence doit-il recevoir par rapport au moteur électrique ?",
   "answer": 600,
   "unit": "J",
   "explain": "Essence : 270 ÷ 0,3 = 900 J. Électrique : 270 ÷ 0,9 = 300 J. Différence : 900 − 300 = 600 J."
  },
  {
   "type": "tf",
   "q": "Si tu inverses le sens du courant dans une bobine, son pôle Nord reste Nord.",
   "answer": false,
   "explain": "En inversant le courant, on inverse les pôles : le Nord devient Sud et inversement. C’est exactement le rôle du collecteur."
  },
  {
   "type": "order",
   "q": "Remets dans l’ordre ce qui se passe pendant que le rotor fait un demi-tour.",
   "items": [
    "La bobine est attirée par l’aimant en face",
    "Le collecteur inverse le courant",
    "Le pôle de la bobine change",
    "La bobine est repoussée et poussée en avant"
   ],
   "explain": "Attirée d’abord, puis le courant s’inverse, le pôle change et la bobine est poussée plus loin : la rotation continue."
  }
 ]
});
