function computerPlay() {
    const a = ['Rock', 'Paper', 'Scissors'];
    return a[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(playerSelection == 'Rock') {
        if(computerSelection == 'Rock') {
            return "Tie!";
        } else if (computerSelection == 'Paper') {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Won! Rock beats Scissors";
        }
    } else if(playerSelection == 'Paper') {
        if(computerSelection == 'Rock') {
            return "You Won! Paper beats Rock";
        } else if (computerSelection == 'Paper') {
            return "Tie!";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if(computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == 'Paper') {
            return "You Won! Scissors beats Paper";
        } else {
            return "Tie!";
        }
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    let playerSelection = ''; 
    let computerSelection = ''; 
    let result = ''; 

    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock or Paper or Scissors?");
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);    

        console.log(result); 

        if(result.slice(0, 7) == 'You Won') {
            playerPoints++;
        } else if(result.slice(0, 8) == 'You Lose') {
            computerPoints++;
        }
    }

    if(playerPoints > computerPoints) {
        console.log("You Won the Game! You: " + playerPoints + " - Computer: " + computerPoints);
    } else if(playerPoints < computerPoints) {
        console.log("You Lose the Game! You: " + playerPoints + " - Computer: " + computerPoints);
    } else {
        console.log("Tie! You: " + playerPoints + " - Computer: " + computerPoints);
    }
}

game();
