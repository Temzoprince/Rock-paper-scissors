/* 
Rock paper scissors 

Classic RPS vs the computer
The winner of each round will be displayed and then the overall winner after
the 5th round
The overall winner is the one who wins the most out of 5 rounds

How to win:
Player and component will choose either rock paper or scissors
User wins by choosing a superior option
Rock beats Scissors
Scissors beats Paper
Paper beats Rock
*/

// Get the computers choice - a random choice of rock, paper or scissors
let getComputerChoice = function() {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());


// Ask the user to enter their selection
let getPlayerChoice = function() {
    
    // Player must enter rock, paper or scissors
    let wrongChoice = true;
    while (wrongChoice) {
        var choice = prompt("Choose Rock, Paper or Scissors:");
        // Make the player's selection case-insensitive
        choice = choice.toLowerCase();

        if ( (choice === "rock") || (choice === "paper") || (choice === "scissors")) {
            wrongChoice = false;
        }
    }

    return choice;
}
// console.log(getPlayerChoice());


// Play a round of rock paper scissors

function playRound(computerSelection, playerSelection) {
    // Compare the user's choice to the computer's choice
    console.log(computerSelection)

    // When Computer chooses Rock
    if ((computerSelection === "rock") && (playerSelection === "rock")) {
        console.log("Draw! Both Players chose Rock");
        return "draw";
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        console.log("You Win! Paper beats Rock");
        return "win";
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("You Lose! Rock beats Scissors");
        return "lose";
    }

    // When Computer Chooses Paper
    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("You Lose! Paper beats Rock");
        return "lose";
    } else if ((computerSelection === "paper") && (playerSelection === "paper")) {
        console.log("Draw! Both Players chose Paper");
        return "draw";
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        console.log("You Win! Scissors beats Paper");
        return "win";
    }

    // When Computer Chooses Scissors
    if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        console.log("You Win! Rock beats Scissors");
        return "win";
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("You Lose! Scissors beats Paper");
        return "lose";
    } else if ((computerSelection === "scissors") && (playerSelection === "scissors")) {
        console.log("Draw! Both Players chose Scissors");
        return "draw";
    }
}
    // Play a game of Rock, Paper Scissors

// function playGame() {
//     alert("Welcome to Rock Paper Scissors");
//     let playerScore = 0;
//     let computerScore = 0;
//     // Run the game 5 times
//     for (let i = 0; i < 5; i++) {
//         // During each round, record who wins
//         let result = playRound(getComputerChoice(), getPlayerChoice())
//         if (result === "win") {
//             playerScore++
//         } else if (result === "lose") {
//             computerScore++
//         } else {
//             playerScore++
//             computerScore++
//         }
//     }
        
//     // Display the overall winner and the score
//     console.log("\n" + "Player score is " + playerScore)
//     console.log("Computer score is " + computerScore)

//     if (playerScore > computerScore) {
//         console.log("\nYou Win! Congratulations!")
//     } else if (playerScore < computerScore) {
//         console.log("\nYou lose. Try again next time.")
//     } else {
//         console.log("\nIts a draw! Give it another shot.")
//     }
// }
// playGame();

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')

rockButton.addEventListener('click', () => {
    console.log('Player chose Rock!')
})

paperButton.addEventListener('click', () => {
    console.log('Player chose paper!')
})

scissorsButton.addEventListener('click', () => {
    console.log('Player chose scissors!')
})
