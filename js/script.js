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

function getPlayerChoice() {
    // const buttons = document.querySelectorAll("button");
    // buttons.forEach((button) => {
    //     button.addEventListener('click', () => {
    //         //console.log(button.id);
    //         if (button.id === "1") {
    //             console.log("rock");
    //             return ("rock");
    //         }
    //         else if (button.id === "2") {
    //             console.log("paper");
    //             return ("paper");
    //         }
    //         else if (button.id === "3") {
    //             console.log("scissor");
    //             return ("scissors");
    //         }
    //     });
    //     console.log(button.id);
    // });
    // document.getElementById("1").addEventListener("click", function() {
    //     playerRock();
    // });
}

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

// let player = -1;
// player = getPlayerChoice();

// //console.log(getPlayerChoice());
// console.log(player);

// let playerCount = 0;
// let computerCount = 0;
// for (let i = 0; i < 5; i++) {
//     let player = getPlayerChoice();
//     let computer = getComputerChoice();
//     let winner = playRound(player, computer);
//     if (winner === 1)
//         playerCount++;
//     else if (winner === 0)
//         computerCount++;
// }

// alert("Score: Player: " + playerCount + " Computer: " + computerCount);