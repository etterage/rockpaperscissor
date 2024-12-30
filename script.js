let win = 0;
let lose = 0;
let draw = 0;

function playGround(playerChoice) {
    const selections = ["rock", "paper", "scissors"];
    const computerChoice = selections[Math.floor(Math.random() * selections.length)];

    if (playerChoice === computerChoice) {
        draw++;
        document.getElementById('drawScore').textContent = draw;
        document.querySelector('.resultWords p').textContent = "It's a DRAW!"
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        win++;
        document.getElementById('playerScore').textContent = win;
        document.querySelector('.resultWords p').textContent = "You WON!"
    }
    else {
        lose++;
        document.getElementById('computerScore').textContent = lose;
        document.querySelector('.resultWords p').textContent = "You LOST!"
    }

    document.querySelector('.gameContainer').style.display = 'none';
    document.querySelector('.resultContainer').style.display = 'block';

    const playerImg = document.getElementById('playerImg');
    const computerImg = document.getElementById('computerImg');

    playerImg.src = `/images/${playerChoice}.png`;
    computerImg.src = `./images/${computerChoice}.png`
    
    
}

document.querySelector('#rock').addEventListener('click', () => {
    playGround("rock");
});
document.querySelector('#paper').addEventListener('click', () => {
    playGround("paper");
});
document.querySelector('#scissors').addEventListener('click', () => {
    playGround("scissors");
});

document.querySelector('#playAgain').addEventListener('click', () => {
    document.querySelector('.gameContainer').style.display = 'block';
    document.querySelector('.resultContainer').style.display = 'none';
});
