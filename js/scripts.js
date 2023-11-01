// Business Logic

function PigDice(player1, player2, rollScore) {
  this.player1 = player1;
  this.player2 = player2;
  this.rollScore = rollScore;
  this.currentPlayer = 1;
}

PigDice.prototype.rollDice = function () {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    if (this.player1 + currentRoll + this.rollScore >= 100 ||  this.player2 + currentRoll + this.rollScore >= 100) {
        if (this.player1 + currentRoll + this.rollScore >= 100) {
            return "Player 1 wins!";
        } else if (this.player2 + currentRoll + this.rollScore >= 100) {
            return "Player 2 wins!";
        }
    } else {
    }        if (currentRoll != 1) {
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

PigDice.prototype.hold = function () {
  if (this.currentPlayer === 1) {
    this.player1 += this.rollScore;
    this.rollScore = 0;
   } else if (this.currentPlayer === 2) {
    this.player2 += this.rollScore;
    this.rollScore = 0;
   }
    return this.switchPlayer();
}

// User Interface Logic

let newGame = new PigDice(0, 0, 0);
console.log("Current rollScore: " + newGame.rollDice());
console.log(newGame)
