function PigDice(score1, score2, rollScore) {
  this.score1 = score1;
  this.score2 = score2;
  this.rollScore = rollScore;
}

PigDice.prototype.currentScore = function () {
  return "Player 1 = " + this.score1 + " Player 2 = " + this.score2
};

// ----Test Key----

