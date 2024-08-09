console.log("Hello!' Let's play rock, paper & scissors. Please, type your option (rock, paper or scissors).");

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