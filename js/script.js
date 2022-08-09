function getComputerChoice() {
    let rng = Math.floor(Math.random() * 100000) % 3;
    if (rng === 0)
        return "Rock";
    else if (rng === 1)
        return "Paper";
    else
        return "Scissors";
}

const button = document.querySelectorAll("button");
button.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "1") {
            playRound("rock", getComputerChoice());
        }

        if (button.id === "2") {
            playRound("paper", getComputerChoice());
        }
            
        if (button.id === "3") {
            playRound("scissors", getComputerChoice());
        }
            
    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Paper") {
            incrementComputer();
        }
        else if (computerSelection === "Rock") {
        }
        else {
            alert("You Win! Rock beats Scissors");
            incrementPlayer();
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
        }
        else if (computerSelection === "Rock") {
            alert("You Win! Paper beats Rock");
            incrementPlayer();
        }
        else {
            alert("You Lose! Scissors beats Paper");
            incrementComputer();
        }
    }
    else {
        // player chooses scissors
        if (computerSelection === "Paper") {
            incrementPlayer();
        }
        else if (computerSelection === "Rock") {
            incrementComputer();
        }
        else {
            alert("You Tie! Scissors ties with Scissors");
        }
    }
}

function incrementPlayer() {
    let playerScore = document.getElementsByClassName("playerscore");
    playerScore[0].innerHTML++;
}

function incrementComputer() {
    let computerScore = document.getElementsByClassName("computerscore");
    computerScore[0].innerHTML++;
}