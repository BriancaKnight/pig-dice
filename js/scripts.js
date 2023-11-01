function PigDice(score1, score2, rollScore) {
  this.score1 = score1;
  this.score2 = score2;
  this.rollScore = rollScore;
}

PigDice.prototype.rollDice = function () {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    if (currentRoll != 1) {
        this.rollScore += currentRoll;
    } else {
        this.rollScore = 0;
    }
    return currentRoll;
}

PigDice.prototype.currentScore = function () {
  return "Player 1 = " + this.score1 + " Player 2 = " + this.score2
};




// ----Test Key----

// let newGame = new PigDice(0, 0, 0);
// console.log("Current rollScore: " + newGame.rollDice());
// console.log(newGame)