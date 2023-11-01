Describe PigDice

Test: It should make a constructor for PigDice.
Code: function PigDice(score1, score2) {
              this.score1 = score1;
              this.score2 = score2;
              }
      let pigDice = new PigDice("20", "40")
Expected Output: pigDice;
                Pig Dice {"20", "40"};

Test: It should create a prototype to display calculated score. 
Code: PigDice.currentScore();
Expected Output: "Player 1 = 20  Player 2 = 40"

Test: It should randomize dice roll between 1 through 6.
Code: PigDice.rollDice();
Expected Output: (2)

Test: It should add parameters so that as long as roll is not a "1" it will continue to add to rollScore.
Code: PigDice.rollDice();
Expected Output: rollScore += currentRoll

Test: It should reset rollScore to 0 if currentRoll = 1
Code: PigDice.rollDice();
Expected Output: rollScore = 0

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

