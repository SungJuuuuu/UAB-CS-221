function getComputerChoice() {
    let compChoice=Math.floor(Math.random() *3);
    let computerChoice;
    if (compChoice==0){
                computerChoice='rock';
    } else if (compChoice==1){
                computerChoice='paper';
    } else{
            computerChoice='scissor';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    switch (true) {
        case userChoice === computerChoice:
            return 'It\'s a tie!';
        case (userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper'):
            return 'You win!';
        default:
            return 'You lose!'; //If the combination of choice isn't any of the above, then the user loses
    }
}

function updateResult(userChoice, computerChoice, result) {
    const displayResult = document.querySelector('.result');  
    displayResult.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`; //Content (text) of result is updated with this 
}

document.querySelector('.rock').addEventListener('click', function () {
    rPs('rock');  // If the user clicks on the class rock, rock is registered as userChoice and is put into the function playGame same for paper and scissor classes
});

document.querySelector('.paper').addEventListener('click', function () {
    rPs('paper');
});

document.querySelector('.scissor').addEventListener('click', function () {
    rPs('scissors');
});

function rPs(userChoice) {
    const computerChoice = getComputerChoice(); //result of getComputerChoice is stored in computerChoice
    const result = determineWinner(userChoice, computerChoice); //variable value of result is determined by the determineWinner function
    updateResult(userChoice, computerChoice, result); 
}






