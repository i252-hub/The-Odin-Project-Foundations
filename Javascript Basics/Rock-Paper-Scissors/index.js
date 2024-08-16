let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
   
    const computerChoice = getComputerChoice();
    const text = document.getElementById('result');

    if (humanChoice === computerChoice) {
        text.textContent = "It's a tie.";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        text.textContent = `You win this round! Human: ${humanScore} Computer: ${computerScore}`;
    } else {
        computerScore++;
        text.textContent = `Computer wins this round. Human: ${humanScore} Computer: ${computerScore}`;
    }

    checkGameEnd();
}

function checkGameEnd() {
    if (humanScore === 5) {
        alert("You win the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector('#result').textContent = '';
}

document.querySelector('#rock').addEventListener('click', () => playRound('rock'));
document.querySelector('#paper').addEventListener('click', () => playRound('paper'));
document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
