let result;
let compChoice;
do{
let userPrompt=prompt("Rock, paper, or scissor? ");
userPrompt=userPrompt.toLowerCase();
compChoice=Math.floor(Math.random() *3);
if (compChoice==0){
    compChoice="rock";
} else if (compChoice==1){
    compChoice="paper";
} else{
    compChoice="scissor";
}
switch(userPrompt){ //checks the user's answers against computer choices
    case compChoice: //if userprompt==compchoice
        result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nIt's a tie!";
        break;
    case "rock":
        if (compChoice == "paper") { 
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nComputer wins!";
        } else {
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nYou win!"; //since userprompt !== compchoice (case compchoice), else should be whatever the last available compchoice is (in this case, scissors)
        }
        break;
    case "paper":
        if (compChoice == "scissor") {
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nComputer wins!";
        } else {
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nYou win!";
        }
        break;
    case "scissor":
        if (compChoice == "rock") {
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nComputer wins!";
        } else {
            result = "User chose: " + userPrompt + "\nComputer chose: " + compChoice + "\nYou win!";
        }
        break;
    default:
        /*
        alert("Invalid choice!");
        let userPrompt=prompt("Rock, paper, or scissor? ");
        userPrompt=userPrompt.toLowerCase(); */
        result="Please choose between rock, paper, or scissor";
}
console.log(result);
yes=confirm("Do you want to play again?");
} while(yes); /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while for do while loop */