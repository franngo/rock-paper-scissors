let humanScore = 0;
let computerScore = 0;

console.log("Hello!' Let's play rock, paper & scissors. Please, type 1 if you wanna play.");
//your option (rock, paper or scissors)
//console.log(getHumanChoice());
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);

function playRound(humChoice, comChoice) {
    if(humChoice==comChoice) {
        console.log("It's a tie!");
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
    } else if((humChoice=="rock"&&comChoice=="scissors")||(humChoice=="paper"&&comChoice=="rock")||(humChoice=="scissors"&&comChoice=="paper")) {
        console.log("Congratulations! You won this round");
        humanScore++;
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
    } else {
        console.log("What a pity! You lost this round");
        computerScore++;
        console.log("Your scores is " + humanScore + " and the computer score is " + computerScore);
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