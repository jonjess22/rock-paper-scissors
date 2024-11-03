function getComputerChoice()
{
    let num = Math.random();

    if (num < 0.333) return "rock";
    else if (num < 0.666) return "paper";
    else return "scissors";
}

function getHumanChoice()
{
    let choice = prompt("Enter your choice: rock, paper or scissors");

    // validate the choice but case insensitive
    while (choice.toLowerCase() !== 'rock' && choice.toLowerCase() !== 'paper' && choice.toLowerCase() !== 'scissors')
    {
        choice = prompt("Invalid choice. Please enter rock, paper or scissors");
    }

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        humanScore++;
        console.log("Human wins rock against scissors! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        computerScore++;
        console.log("Computer wins paper against rock! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        humanScore++;
        console.log("Human wins paper against rock! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        computerScore++;
        console.log("Computer wins scissors against paper! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        humanScore++;
        console.log("Human wins scissors against paper! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        computerScore++;
        console.log("Computer wins rock against scissors! Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanChoice === computerChoice)
    {
        console.log("It's a tie! Human: " + humanScore + " Computer: " + computerScore);
    }
}

function playGame()
{
    for (var i = 0; i < 5 ; i++)
    {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore)
    {
        alert("Human wins! Final score: Human: " + humanScore + " Computer: " + computerScore);
    }
    else if (humanScore < computerScore)
    {
        alert("Computer wins! Final score: Human: " + humanScore + " Computer: " + computerScore);
    }
    else
    {
        alert("It's a tie! Final score: Human: " + humanScore + " Computer: " + computerScore);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();



