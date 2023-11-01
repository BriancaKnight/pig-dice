Describe PigDice

Test: It should make a constructor for PigDice.
Code: function PigDice(score1, score2) {
              this.score1 = score1;
              this.score2 = score2;
              }
      let pigDice = new PigDice("20", "40")
Expected Output: pigDice;
                Pig Dice {"20", "40"};

Test: It should create a prototype to display calculate score.
Code: PigDice.prototype.currentScore = function () {
  return "Player 1 = " + this.score1 + " Player 2 = " + this.score2
};
Expected Output: PigDice.currentScore();
                "Player 1 = 20  Player 2 = 40"

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

Test:
Code:
Expected Output:

