/*
Create functions for every action:
- Player's choice
- Computer's choice
- Announce winner
- Reset game

Create variables to keep track of the scores:
- Player's score
- Computer's score
- Number of rounds
*/

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerChoice() {
    let random = Math.random();
    
    if (random < 0.33) {
        return 'rock';
    } else if (random < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playerChoice() {
    let rockBtn = document.getElementById('rock');
    let paperBtn = document.getElementById('paper');
    let scissorsBtn = document.getElementById('scissors');


}