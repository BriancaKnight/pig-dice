Describe PigDice

Test: It should make a constructor for PigDice.
Code: function PigDice(player1, player2, rollScore, currentPlayer)
Expected Output: "player1", "player2", "rollscore", "currentPlayer"

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

Test: It should create a function to switch user players.
Code: PigDice.switchPlayer()
Expected Output: 2

Test: It should create a hold function.
Code: PigGame.hold();
Expected Output: 2

Test: It should add the roll score to individual player scores.
Code: PigGame.hold();
Expected Output: player1 + rollScore

Test: It should return rollScore to 0 after switching players.
Code: PigGame.rollScore();
Expected Output: 0

Test: It should set winning parameters.
Code: PigGame.rollScore(100);
Expected Output: "Player 1 wins!"

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