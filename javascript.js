const computerChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
    return randomIndex
};




function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ) {
        return "player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == 'Tie') {
        return 'Its a tie'
    }
    else if (result == 'Player'){
        return  `You win ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt('rock paper scissors');
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(computerChoices.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log('welcome')
 for (let i = 0; i < 5; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log('--------')
    if(checkWinner(playerSelection, computerSelection) == 'player'){
        playerScore++;
    }
    else if(checkWinner(playerSelection,computerSelection) =='Computer'){
        computerScore++;
    }
 }
 console.log('game over')
 if(playerScore > computerScore){
    console.log('Player was the winner')
 }
 else if (playerScore < computerScore){
    console.log('Computer was the winner')
 }
 else{
    console.log('It was a tie')
 }
}



game()


