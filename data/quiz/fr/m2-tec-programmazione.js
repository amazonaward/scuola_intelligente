QBANK("fr", "m2-tec-programmazione", {
 "f": [
  {
   "type": "mc",
   "q": "Quelle instruction Python affiche une valeur à l'écran ?",
   "options": [
    "print()",
    "input()",
    "range()"
   ],
   "answer": 0,
   "explain": "print() écrit à l'écran ; input() lit ce que tape l'utilisateur ; range() génère une suite de nombres."
  },
  {
   "type": "tf",
   "q": "En Python, un texte (chaîne) s'écrit entre guillemets.",
   "answer": true,
   "explain": "Par exemple nome = \"Sara\" : les guillemets indiquent que c'est du texte."
  },
  {
   "type": "mc",
   "q": "De quel type est la valeur 3.14 ?",
   "options": [
    "Entier (int)",
    "Décimal (float)",
    "Chaîne (str)"
   ],
   "answer": 1,
   "explain": "Un nombre avec une partie décimale est un float (écrit avec un point)."
  },
  {
   "type": "text",
   "q": "Quel mot-clé de Python utilises-tu pour une boucle dont le nombre de répétitions est connu ?",
   "answer": [
    "for"
   ],
   "explain": "for répète un nombre de fois fixé, en général avec range()."
  },
  {
   "type": "tf",
   "q": "Le nom d'une variable peut contenir des espaces, par exemple « points max ».",
   "answer": false,
   "explain": "Faux : pas d'espaces dans les noms ; on écrit points_max."
  }
 ],
 "m": [
  {
   "type": "num",
   "q": "Combien de nombres affiche : for i in range(2, 6): print(i) ?",
   "answer": 4,
   "tol": 0,
   "explain": "range(2, 6) donne 2, 3, 4, 5 : il s'arrête avant 6, donc 4 nombres."
  },
  {
   "type": "mc",
   "q": "Quelle ligne affiche correctement le mot Ciao à l'écran ?",
   "options": [
    "print(Ciao)",
    "print(\"Ciao\")",
    "print: Ciao"
   ],
   "answer": 1,
   "explain": "Un texte se met entre guillemets dans les parenthèses de print()."
  },
  {
   "type": "num",
   "q": "c = 10 ; while c > 4 : c = c - 3. Combien de fois la boucle s'exécute-t-elle ?",
   "answer": 2,
   "tol": 0,
   "explain": "c vaut 10 → 7 (1er tour) → 4 (2e tour) ; 4 > 4 est faux et la boucle s'arrête : 2 tours."
  },
  {
   "type": "text",
   "q": "Comment appelle-t-on une erreur dans un programme ?",
   "answer": [
    "bug",
    "un bug",
    "le bug"
   ],
   "explain": "Depuis 1947, les erreurs s'appellent des « bugs » et les corriger, c'est « déboguer »."
  },
  {
   "type": "mc",
   "q": "Lequel de ces noms de variable est valide en Python ?",
   "options": [
    "2punti",
    "punti_max",
    "punti max"
   ],
   "answer": 1,
   "explain": "Un nom ne peut pas commencer par un chiffre ni contenir d'espaces : punti_max convient."
  }
 ],
 "d": [
  {
   "type": "num",
   "q": "s = 0 ; for n in range(1, 6): s = s + n * n. Que vaut s à la fin ?",
   "answer": 55,
   "tol": 0,
   "explain": "On additionne les carrés : 1 + 4 + 9 + 16 + 25 = 55."
  },
  {
   "type": "mc",
   "q": "Un programme doit additionner 5 nombres tapés par l'utilisateur, mais à la fin il n'affiche que le dernier. Quelle est l'erreur la plus probable ?",
   "options": [
    "Il a écrit somma = 0 dans la boucle, donc elle se remet à zéro à chaque tour",
    "Il a utilisé for au lieu de while",
    "Il a mis print en dehors de la boucle"
   ],
   "answer": 0,
   "explain": "Si somma = 0 est dans la boucle, l'accumulateur se remet à zéro à chaque tour et il ne reste que la dernière valeur."
  },
  {
   "type": "tf",
   "q": "x = 5 ; y = x ; x = x + 1. À la fin, y vaut encore 5.",
   "answer": true,
   "explain": "y a copié la valeur 5 avant la modification : changer x ensuite ne change pas y."
  },
  {
   "type": "num",
   "q": "a = 2 ; for i in range(4): a = a * 2 - 1. Que vaut a à la fin ?",
   "answer": 17,
   "tol": 0,
   "explain": "Pas à pas : 2 → 3 → 5 → 9 → 17."
  },
  {
   "type": "order",
   "q": "Mets dans l'ordre les lignes d'un compte à rebours 3, 2, 1, Via ! (les deux lignes dans la boucle sont indentées).",
   "items": [
    "n = 3",
    "while n > 0:",
    "print(n)",
    "n = n - 1",
    "print(\"Via!\")"
   ],
   "explain": "On part de n = 3, le while répète print et la diminution, puis hors de la boucle on affiche « Via! »."
  }
 ]
});
