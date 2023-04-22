let playerPoints = 0;
let computerPoints = 0;
let round = 0;
let result_list = [];

document.addEventListener('DOMContentLoaded', function() {

	const button_rock     = document.getElementById('rock');
	const button_paper    = document.getElementById('paper');
	const button_scissors = document.getElementById('scissors');

	const result = document.getElementById('result');
	const final_result = document.getElementById('final');

	button_rock.addEventListener('click', function() {
		let list_result = game('Rock');	
		result.textContent = list_result[0]
		final_result.textContent = list_result[1];
		result_list = ["", ""];
	});
	
	button_paper.addEventListener('click', function() {
		let list_result = game('Paper');	
		result.textContent = list_result[0]	
		final_result.textContent = list_result[1];
		result_list = ["", ""];
	});

	button_scissors.addEventListener('click', function() {
		let list_result = game('Scissors');	
		result.textContent = list_result[0]	
		final_result.textContent = list_result[1];
		result_list = ["", ""];
	});
	
});


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
            return "You Lose! Paper beats Rock.";
        } else {
            return "You Won! Rock beats Scissors.";
        }
    } else if(playerSelection == 'Paper') {
        if(computerSelection == 'Rock') {
            return "You Won! Paper beats Rock.";
        } else if (computerSelection == 'Paper') {
            return "Tie!";
        } else {
            return "You Lose! Scissors beats Paper.";
        }
    } else {
        if(computerSelection == 'Rock') {
            return "You Lose! Rock beats Scissors.";
        } else if (computerSelection == 'Paper') {
            return "You Won! Scissors beats Paper.";
        } else {
            return "Tie!";
        }
    }
}

function game(playerSelection) {
	let computerSelection = ''; 
    let result = '';

    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);    
	result_list[0] = result;

    if(result.slice(0, 7) == 'You Won') {
		playerPoints++;
	} else if(result.slice(0, 8) == 'You Lose') {
        computerPoints++;
    }

	round++;

	if (round == 3) {
		if(playerPoints > computerPoints) {
			result_list[1] = "You Won the Game! You: " + playerPoints + " - Computer: " + computerPoints;
		} else if(playerPoints < computerPoints) {
			result_list[1] = "You Lose the Game! You: " + playerPoints + " - Computer: " + computerPoints;
		} else {
			result_list[1] = "Tie! You: " + playerPoints + " - Computer: " + computerPoints;
		}
		
		playerPoints = 0;
		computerPoints = 0;
		round = 0;
	}
	
	return result_list;
}
