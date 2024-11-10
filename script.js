// console.log(Math.floor((Math.random() * 3)) + 1);

function getComputerChoice() {
    let randomInt = Math.floor((Math.random() * 3)) + 1;
    let computerChoice;

    if (randomInt == 1) {
        computerChoice = "rock"
    }
    else if (randomInt == 2) {
        computerChoice = "paper"
    }
    else if (randomInt == 3) {
        computerChoice = "scissors"
    }
    else {
        computerChoice = "Error"
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors!");
    return humanChoice.toLowerCase();
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playGround(computerChoice, humanChoice) {
    let message;
    let win = 0;
    let lose = 0;
    let draw = 0;
    let inc = 3;
    let finalMessage;

        switch (humanChoice) {
            case "rock":
                if (computerChoice == "rock") {
                    message = "Its a draw!";
                    draw +=1
                }
                else if (computerChoice == "paper") {
                    message = "You Lost!";
                    lose += 1;
                }
                else if (computerChoice == "scissors") {
                    win += 1;
                    message = "You Won!";
                }
                break;
            case "paper":
                if (computerChoice == "paper") {
                    message = "Its a draw!";
                    draw +=1
                }
                else if (computerChoice == "scissors") {
                    message = "You Lost!";
                    lose += 1;
                }
                else if (computerChoice == "rock") {
                    win += 1;
                    message = "You Won!";
                }
                break;
            case "scissors":
                if (computerChoice == "scissors") {
                    message = "Its a draw!";
                    draw +=1
                }
                else if (computerChoice == "rock") {
                    message = "You Lost!";
                    lose += 1;
                }
                else if (computerChoice == "paper") {
                    win += 1;
                    message = "You Won!";
                }
                break;
            default:
                message = "Enter ony Rock Paper or Scissors!"
                break;
        }     
    finalMessage = message + "\nScore: Win-" + win + " Draw-" + draw + " Lose-" + lose;
    
    return finalMessage;
}

console.log("You: " + humanSelection);
console.log("Computer: " + computerSelection);
console.log(playGround(computerSelection, humanSelection));
