const options = ["rock", "paper", "scissors"];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * options.length); 
    return options[randomIndex];
}

function isValidChoice(choice) {
  return ["rock", "paper", "scissors"].includes(choice);
}


function getResult(playerChoice, enemyChoice) {
  if (playerChoice === enemyChoice) {
    return "draw";
  }

  if (
    (playerChoice === "rock" && enemyChoice === "scissors") ||
    (playerChoice === "scissors" && enemyChoice === "paper") ||
    (playerChoice === "paper" && enemyChoice === "rock")
  ) {
    return "win";
  }

  return "lose";
}

module.exports = { getRandomChoice, getResult, isValidChoice };


