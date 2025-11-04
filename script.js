let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const MAX_ROUNDS = 5;

function getComputerChoice() {
    let random = Math.random();
    
    if (random < 0.33) {
        return 'rock';
    } else if (random < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let rockBtn = document.querySelector('.rock');
    let paperBtn = document.querySelector('.paper');
    let scissorsBtn = document.querySelector('.scissors');
    let resetBtn = document.querySelector('.reset-button');

    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
    resetBtn.addEventListener('click', restartGame);
}

function playRound(playerChoice) {
    if (rounds >= MAX_ROUNDS) {
        return;
    }

    // Create score display if it doesn't exist
    let displayScore = document.querySelector('.score-display');
    if (!displayScore) {
        displayScore = document.createElement('div');
        displayScore.className = 'score-display';
        document.querySelector('.button-container').appendChild(displayScore);
    }

    let computerChoice = getComputerChoice();
    rounds++;

    let resultText;

    if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'){
        playerScore++;
        resultText = `Round ${rounds}: You win! You chose ${playerChoice}, computer chose ${computerChoice}.`;
    } else if (playerChoice === computerChoice) {
        resultText = `Round ${rounds}: It's a tie! You both chose ${playerChoice}.`;
    } else {
        computerScore++;
        resultText = `Round ${rounds}: You lose! You chose ${playerChoice}, computer chose ${computerChoice}.`;
    }

    const resultElement = document.createElement('p');
    resultElement.textContent = resultText;
    
    const scoreElement = document.createElement('p');
    scoreElement.textContent = `My Score: ${playerScore}     Computer Score: ${computerScore}`;
    scoreElement.style.fontWeight = 'bold';
    
    displayScore.innerHTML = '';
    displayScore.appendChild(resultElement);
    displayScore.appendChild(scoreElement);

    if (rounds >= MAX_ROUNDS) {
        endGame();
    }
}

function endGame() {
    let displayScore = document.querySelector('.score-display');
    
    const finalResult = document.createElement('p');
    finalResult.style.fontSize = '1.5em';
    finalResult.style.fontWeight = 'bold';
    finalResult.style.marginTop = '20px';
    
    if (playerScore > computerScore) {
        finalResult.textContent = `🎉 YOU WIN THE GAME! Final Score: ${playerScore}-${computerScore}`;
        finalResult.style.color = 'green';
    } else if (playerScore < computerScore) {
        finalResult.textContent = `😞 YOU LOSE THE GAME! Final Score: ${playerScore}-${computerScore}`;
        finalResult.style.color = 'red';
    } else {
        finalResult.textContent = `🤝 IT'S A TIE GAME! Final Score: ${playerScore}-${computerScore}`;
        finalResult.style.color = 'blue';
    }
    
    displayScore.appendChild(finalResult);
    
    disableButtons();
}

function disableButtons() {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
}

function enableButtons() {
    document.querySelector('.rock').disabled = false;
    document.querySelector('.paper').disabled = false;
    document.querySelector('.scissors').disabled = false;
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    
    let displayScore = document.querySelector('.score-display');
    if (displayScore) {
        displayScore.innerHTML = '<p>Game restarted! Make your choice.</p>';
    }
    
    enableButtons();
}

// Wait for DOM to load before initializing
document.addEventListener('DOMContentLoaded', () => {
    getPlayerChoice();
});