let userScore = 0;
let computerScore = 0;
let maxScore=20;
const userScore_span = document.getElementById("score1");
const computerScore_span = document.getElementById("score2");
let highlight = document.querySelector(".highlight>p");
let choice_paper = document.getElementById("p");
let choice_rock = document.getElementById("r");
let choice_scissor = document.getElementById("s");
let begin = document.querySelector(".begin")
begin.addEventListener("click", () => {
    if(userScore===0&&computerScore===0){
        alert("Game about to start")
    }else{
    alert("Game started")
    }
})
function gameChoice() {
    const choices = ["r", "p", "s"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
// function limit(maxScore){
//     for(let i=0;i<maxScore;i++){
//         return userScore=maxScore;
//         return computerScore=maxScore;
//     }
// }
function convertToSmallWord(word) {
    if (word === "r") return "rock";
    if (word === "p") return "paper";
    return "scissors";
}
function win(userChoice, computerChoice) {
    const smallWordUser = "user".fontsize(3).sub();
    const smallWordComp = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    begin.innerHTML = "Game started!"
    highlight.innerHTML = `${convertToSmallWord(userChoice)}${smallWordUser} beats${convertToSmallWord(computerChoice)}${smallWordComp}.You won!`
}
function lose(userChoice, computerChoice) {
    const smallWordUser = "user".fontsize(3).sub();
    const smallWordComp = "comp".fontsize(3).sub();
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    begin.innerHTML = "Game started!"
    highlight.innerHTML = `${convertToSmallWord(userChoice)}${smallWordUser} loses ${convertToSmallWord(computerChoice)}${smallWordComp}.You lost!`
}
function draw(userChoice, computerChoice) {
    const smallWordUser = "user".fontsize(3).sub();
    const smallWordComp = "comp".fontsize(3).sub();
    begin.innerHTML = "Game started!"
    highlight.innerHTML = `${convertToSmallWord(userChoice)}${smallWordUser} draws ${convertToSmallWord(computerChoice)}${smallWordComp}.Its a draw..`
}
function game(userChoice){
const computerChoice=gameChoice();
switch (userChoice + computerChoice) {
    case "rp":
    case "ps":
    case "sr":
        win(userChoice, computerChoice);
        break;
    case "pr":
    case "sp":
    case "rs":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "ss":
    case "pp":
        draw(userChoice, computerChoice);
        break;
}
}
function main(){
choice_paper.addEventListener("click",()=>game("p"));
choice_scissor.addEventListener("click",()=>game("s"));
choice_rock.addEventListener("click",()=>game("r"));
}
main();