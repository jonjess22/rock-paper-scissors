function getComputerChoice()
{
    let num = Math.random();

    if (num < 0.333) return "rock";
    else if (num < 0.666) return "paper";
    else return "scissors";
}

function playRound(humanChoice)
{
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore++;
        result.textContent = "Human wins rock against scissors! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        computerScore++;
        result.textContent = "Computer wins paper against rock! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore++;
        result.textContent = "Human wins paper against rock! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        result.textContent = "Computer wins scissors against paper! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        result.textContent = "Human wins scissors against paper! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        result.textContent = "Computer wins rock against scissors! Human: " + humanScore + " Computer: " + computerScore;
    }
    else if (humanChoice === computerChoice)
    {
        result.textContent = "It's a tie! Human: " + humanScore + " Computer: " + computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
let result = document.getElementById("result");

rockButton.addEventListener("click", () => 
{
    playRound("rock");
});

paperButton.addEventListener("click", () => 
{
    playRound("paper");
});

scissorsButton.addEventListener("click", () => 
{
    playRound("scissors");
});



