function PigDice(player1, player2, rollScore, currentPlayer) {
  this.player1 = player1;
  this.player2 = player2;
  this.rollScore = rollScore;
  this.currentPlayer = 1;
}

PigDice.prototype.rollDice = function () {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    if (currentRoll != 1) {
        this.rollScore += currentRoll;
    } else {
        this.rollScore = 0;
        this.switchPlayer();
    }
    return currentRoll;
};

PigDice.prototype.currentScore = function () {
  return "Player 1 = " + this.player1 + " Player 2 = " + this.player2;
};

PigDice.prototype.switchPlayer = function () {
    if (this.currentPlayer === 1) {
        return this.currentPlayer += 1;
    } else {
        return this.currentPlayer -= 1;
    }
}


// ----Test Key----

// let newGame = new PigDice(0, 0, 0);
// console.log("Current rollScore: " + newGame.rollDice());
// console.log(newGame)