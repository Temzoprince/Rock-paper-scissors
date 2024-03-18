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
    if ((computerSelection === "rock") && (playerSelection === "rock")) {
        console.log("Draw! Both Players chose Rock");
        return "Draw! Both Players chose Rock";
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        console.log("You Win! Paper beats Rock")
        return "You Win! Paper beats Rock"
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("You Lose! Rock beats Scissors")
        return "You Lose! Rock beats Scissors"
    }

    // if (getComputerChoice === "paper") {
    //     //
    // }

    // if (getComputerChoice === "scissors") {

    // }
}
    // Display the winner of the round in the console
    console.log(playRound(getComputerChoice(), getPlayerChoice()))
