let humanScore = 0;
let computerScore = 0;

console.log("Hello!' Let's play rock paper scissors. Press the red button to play.");
const button = document.querySelector("input");
button.addEventListener("click", playGame);

function playGame() {
    console.log("**********************************************")
    let humanSelection;
    let computerSelection;
    for(let i=0; i<5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("The final score is " + humanScore + " for you and " + computerScore + " for the computer");
    if(humanScore>computerScore) {
        console.log("You've won! You beat the computer!");
    } else if (computerScore>humanScore) {
        console.log("The computer has won! It has beaten you!");
    } else {
        console.log("It's a tie! Nobody has won!")
    }
    console.log("You can press the button again if you want to repeat the game!")
    humanScore = 0;
    computerScore = 0;
}

function playRound(humChoice, comChoice) {
    if(humChoice==comChoice) {
        console.log("It's a tie!");
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
        console.log("----------------------------------------------");
    } else if((humChoice=="rock"&&comChoice=="scissors")||(humChoice=="paper"&&comChoice=="rock")||(humChoice=="scissors"&&comChoice=="paper")) {
        console.log("Congratulations! You won this round");
        humanScore++;
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
        console.log("----------------------------------------------");
    } else {
        console.log("What a pity! You lost this round");
        computerScore++;
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
        console.log("----------------------------------------------");
    }
}

function getComputerChoice() {
    const random = Math.floor(Math.random()*3); //entero entre 0 y 2 incluídos
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Type your move (rock, paper or scissors)");
    if (answer===null) {
        return "invalid";
    }
    answer = answer.toLowerCase();
    if(!(answer=="rock"||answer=="paper"||answer=="scissors")) {
        return "invalid";
    } else {
        return answer;
    }
}