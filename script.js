let computerPlay = function(){

    return 'scissors'
}

let playRound = function(playerSelection, computerSelection){

    if(playerSelection.toLowerCase() == computerSelection){

        return 'It\'s a tie.'
    }
    else if(playerSelection.toLowerCase() == 'rock'){

        if(computerSelection == 'scissors') return 'You win! Rock beats Scissors.'
        else return 'You lose! Paper beats Rock.'
    }
    else if (playerSelection.toLowerCase() == 'scissors'){

        if (computerSelection == 'rock') return 'You lose! Rock beats Scissors.'
        else return 'You win! Scissors beat Paper.'
    }
    else{

        if(computerSelection == 'scissors') return 'You lose! Scissors beat Paper.'
        else return 'You win! Paper beats Rock.'
    }
}

let game = function(){

    for(let i=0; i<5; i++){

        const playerSelection = prompt('rock paper scissors ?')
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
