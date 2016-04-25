////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    //console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var input = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return input
}

function randomPlay() {
    var randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
        return getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

        return randomPlay();
    
}

function getWinner(playerMove,computerMove) {
    console.log("player/computer " + playerMove + " " + computerMove)
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove){
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors"){
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock"){
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper"){
        winner = "player";
    }
    else{
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
 
    //console.log(winner)
    while (playerWins < 5 && computerWins < 5)  {
        var winner = getWinner(getPlayerMove(), getComputerMove())
        if (winner === "player") {
            playerWins +=1;
        }
        else if (winner === "computer") {
            computerWins +=1;
        }
        console.log("player/computer wins " + playerWins + " " + computerWins)
       
    }
    return [playerWins, computerWins];
    
    // Don't understand why the below if statements don't work
    if (playerWins > computerWins){
        console.log("Player Wins");
    }
    else{
        console.log("Computer Wins");
    }
}

playToFive();