/* 
Rock paper scissors 

Classic RPS vs the computer for 5 rounds
The winner of each round will be displayed and then the overall winner after
the 5th round
The overall winner is the one who wins 3 out of the 5 games

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
    console.log(choice);

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
        // If you choose rock, it's a draw
    if ((computerSelection === "rock") && (playerSelection === "rock")) {
        return "Draw! Both Players chose Rock";
        // If you choose paper, you win
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        return "You Win! Paper beats Rock";
        // If you choose scissors, you lose
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        return "You Lose! Rock beats Scissors";
    }

    // When Computer Chooses Paper
        // If you choose rock, you lose
    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        return "You Lose! Paper beats Rock";
        // If you choose paper, it's a draw
    } else if ((computerSelection === "paper") && (playerSelection === "paper")) {
        return "Draw! Both Players chose Paper";
        // If you choose scissors, you win
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        return "You Win! Scissors beats Paper";
    }

    // When Computer Chooses Scissors
        // If you choose rock, you win
    if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        return "You Win! Rock beats Scissors";
        // If you choose paper, you lose
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        return "You Lose! Scissors beats Paper";
        // If you choose scissors, it's a draw
    } else if ((computerSelection === "scissors") && (playerSelection === "scissors")) {
        return "Draw! Both Players chose Scissors";
    }
}
    // Display the winner of the round in the console
    console.log(playRound(getComputerChoice(), getPlayerChoice()))
