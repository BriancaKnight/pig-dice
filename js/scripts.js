// Business Logic

function PigDice(player1, player2, rollScore) {
    this.player1 = player1;
    this.player2 = player2;
    this.rollScore = rollScore;
    this.currentPlayer = 1;
}

PigDice.prototype.rollDice = function () {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    if (currentRoll != 1) {
        this.rollScore += currentRoll;
        winnerCheck();
    } else {
        this.rollScore = 0;
        this.switchPlayer();
        this.currentScore();
        winnerCheck();
    }
    return currentRoll;
};

PigDice.prototype.currentScore = function () {
    playerSwitch();
};

PigDice.prototype.switchPlayer = function () {
    if (this.currentPlayer === 1) {
        this.currentPlayer += 1;
    } else {
        this.currentPlayer -= 1;
    }
    console.log(this.currentPlayer)
    if (this.currentPlayer === 2 && this.computer === true) {
        this.computerTurn();
        console.log("Test 3")
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
    winnerCheck();
    this.switchPlayer();
}
PigDice.prototype.computerTurn = function () {
    const rollResult = pigDice.rollDice();
    document.getElementById("new-roll").innerText = rollResult;
    document.getElementById("counter").innerHTML = pigDice.rollScore;
        if (rollResult === 1) {
            pigDice.hold();
            pigDice.currentScore();
            console.log("Test 4") 
        } else {
            if (pigDice.rollScore < 15) {
                console.log("Test 1");
                this.computerTurn();
                // setTimeout(pigDice.computerTurn, 1000);
            } else {
                console.log("hold")
                pigDice.hold();
            }
        }
    }

PigDice.prototype.computerAITrue = function () {
    this.computer = true;
}

PigDice.prototype.computerAIFalse = function () {
    this.computer = false;
}

// User Interface Logic
let pigDice = new PigDice(0, 0, 0);
window.addEventListener("load", function () {
    document.querySelector("button#roll").addEventListener("click", () => {
        document.querySelector("p#player-switch").innerHTML = null;
        const rollResult = pigDice.rollDice();
        document.getElementById("new-roll").innerText = rollResult;
        document.getElementById("current-player").innerText = pigDice.currentPlayer;
        document.getElementById("counter").innerHTML = pigDice.rollScore;
    });
    document.querySelector("button#hold").addEventListener("click", () => {
        pigDice.hold();
        document.getElementById("player1").innerText = pigDice.player1;
        document.getElementById("player2").innerText = pigDice.player2;
        document.getElementById("current-player").innerText = pigDice.currentPlayer
        document.getElementById("counter").innerHTML = pigDice.rollScore;
    });
    document.querySelector("button#computer").addEventListener("click", () => {
        pigDice.computer = true;

    });
    document.querySelector("button#players").addEventListener("click", () => {
        pigDice.computer = false;
    });
})

function playerSwitch() {
    document.querySelector("p#player-switch").innerHTML = "Oops you rolled a 1... Next players turn.";
}

function winnerCheck() {
    if (pigDice.currentPlayer === 1 && pigDice.player1 + pigDice.rollScore >= 20) {
        document.getElementById("player1").innerText = pigDice.player1 + pigDice.rollScore;
        document.querySelector("p#player-switch").innerHTML = "Player 1 wins";
        document.querySelector("button#new-game").removeAttribute("class", "hidden");
    } else if (pigDice.currentPlayer === 2 && pigDice.player2 + pigDice.rollScore >= 20) {
        document.getElementById("player2").innerText = pigDice.player2 + pigDice.rollScore;
        document.querySelector("p#player-switch").innerHTML = "Player 2 wins";
        document.querySelector("button#new-game").removeAttribute("class", "hidden");

    }
}

function refreshPage() {
    window.location.reload();
}