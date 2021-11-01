const compChoiceArray = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
// create randomizer for comp choice
function computerPlay() {
  return compChoiceArray[~~(Math.random() * compChoiceArray.length)];
}

// one round test
function singleRound(playerSelection, computerSelection) {
  let result = 0;
  playerSelection = prompt("Please write your selection", "Rock");
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay().toLowerCase();

  if (playerSelection == computerSelection) {
    result = "It's a Tie!"
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    result = "Computer Wins!";
    computerScore++;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "You didn't enter a correct selection";
  }
  console.log(computerSelection,playerSelection);
  return result;
}

// game function to count n rounds winner
function game(roundNumbers) {
  roundNumbers = prompt("Please add the round numbers", 5);
  for (let index = 0; index < roundNumbers; index++) {
    singleRound();
    console.log(`Your score is ${playerScore} & Computer Score is ${computerScore}`);
  }
  console.log(`After ${roundNumbers} rounds, Your score is ${playerScore} & Computer Score is ${computerScore}`)
}

game()