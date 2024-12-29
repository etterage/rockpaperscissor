function playGround(playerChoice) {
    const selections = ["rock", "paper", "scissors"];
    const computerChoice = selections[Math.floor(Math.random() * selections.length)];

    if (playerChoice === computerChoice) {
        alert("Player: " + playerChoice + "\nComputer: " + computerChoice)
        alert("DRAW")
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("Player: " + playerChoice + "\nComputer: " + computerChoice)
        alert("YOU WON")
    }
    else {
        alert("Player: " + playerChoice + "\nComputer: " + computerChoice)
        alert("YOU LOST")
    }
    
    
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
