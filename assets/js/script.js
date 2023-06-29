//variable for presenting text to user
let playerSpeak = document.getElementById("playerout");
let maschineSpeak = document.getElementById("maschineout");
let resultSpeak = document.getElementById("resultout");

//variables for capturing button choices
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let lizardBtn = document.getElementById("lizard");
let spockBtn = document.getElementById("spock");

//variables for buttonClick functions
let player;
let maschine;

//buttonclick function rock
document.getElementById('rock').onclick = function buttonClick1(event) {
    player = rockBtn.textContent;
    maschineTurn();
    playerSpeak.innerHTML = "Player:" + player;
    maschineSpeak.innerHTML = "Maschine:" + maschine;
    resultSpeak.innerHTML = "Result:" + checkWinner();
};

//buttonclick function paper
document.getElementById('paper').onclick = function buttonClick2(event) {
    player = paperBtn.textContent;
    maschineTurn();
    playerSpeak.innerHTML = "Player:" + player;
    maschineSpeak.innerHTML = "Maschine:" + maschine;
    resultSpeak.innerHTML = "Result:" + checkWinner();
};

//buttonclick function scissors
document.getElementById('scissors').onclick = function buttonClick3(event) {
    player = scissorsBtn.textContent;
    maschineTurn();
    playerSpeak.innerHTML = "Player:" + player;
    maschineSpeak.innerHTML = "Maschine:" + maschine;
    resultSpeak.innerHTML = "Result:" + checkWinner();
};

//buttonclick function lizard
document.getElementById('lizard').onclick = function buttonClick4(event) {
    player = lizard.textContent;
    maschineTurn();
    playerSpeak.innerHTML = "Player:" + player;
    maschineSpeak.innerHTML = "Maschine:" + maschine;
    resultSpeak.innerHTML = "Result:" + checkWinner();
};

//buttonclick function spock
document.getElementById('spock').onclick = function buttonClick5(event) {
    player = spockBtn.textContent;
    maschineTurn();
    playerSpeak.innerHTML = "Player:" + player;
    maschineSpeak.innerHTML = "Maschine:" + maschine;
    resultSpeak.innerHTML = "Result:" + checkWinner();
};

//maschineTurn function to automate maschine action using Pattern Matching
function maschineTurn() {
    let randNum = Math.floor(Math.random() * 5) + 1;
    switch (randNum) {
        case 1:
            maschine = "Rock";
            break;

        case 2:
            maschine = "Paper";
            break;

        case 3:
            maschine = "Scissors";
            break;

        case 4:
            maschine = "Lizard";
            break;

        case 5:
            maschine = "Spock";
            break;


    }
}

//checkWinner function to communicate win/lose/draw to user
function checkWinner() {
    if (player == maschine) {
        return "Draw!";
    } else if (player == "Rock") {
        if (maschine == "scissors") {
            return "You win!";
        }
        else if (maschine == "Lizard") {
            return "You win!";
        } else if (maschine) {
            return "Maschine wins!";
        }
    } else if (player == "Paper") {
        if (maschine == "Rock") {
            return "You win!";
        }
        else if (maschine == "Spock") {
            return "You win!";
        } else {
            return "Maschine wins!";
        }

    } else if (player == "Scissors") {
        if (maschine == "Paper") {
            return "You win!";
        }
        else if (maschine == "Lizard") {
            return "You win!";
        } else {
            return "Maschine wins!";
        }

    } else if (player == "Lizard") {
        if (maschine == "Paper") {
            return "You win!";
        }
        else if (maschine == "Spock") {
            return "You win!";
        } else {
            return "Maschine wins!";
        }

    } else if (player == "Spock") {
        if (maschine == "Rock") {
            return "You win!";
        }
        else if (maschine == "Scissors") {
            return "You win!";
        } else {
            return "Maschine wins!";
        }
    }
}

