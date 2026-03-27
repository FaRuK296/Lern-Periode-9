// hello.js
// This file is the frontend part of the rock-paper-scissors game.


let playerScore = 0;
let enemyScore = 0;

const playerChoiceText = document.getElementById("playerChoice");
const enemyChoiceText = document.getElementById("enemyChoice");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const matchWinnerText = document.getElementById("matchWinner");

async function playRound(choice) {
  if (playerScore >= 3 || enemyScore >= 3) {
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/play", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ playerChoice: choice })
    });

    const data = await response.json();

    if (!response.ok) {
      resultText.textContent = data.error;
      return;
    }

    playerChoiceText.textContent = "Your choice: " + data.playerChoice;
    enemyChoiceText.textContent = "Enemy choice: " + data.enemyChoice;
    resultText.textContent = "Result: " + data.result;

    if (data.result === "win") {
      playerScore++;
    } else if (data.result === "lose") {
      enemyScore++;
    }

    scoreText.textContent = "Score → You: " + playerScore + " | Enemy: " + enemyScore;

    if (playerScore === 3) {
      matchWinnerText.textContent = "You won the match!";
    } else if (enemyScore === 3) {
      matchWinnerText.textContent = "Enemy won the match!";
    }

  } catch (error) {
    resultText.textContent = "Backend error. Is the server running?";
    console.error(error);
  }
}

document.getElementById("rockBtn").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paperBtn").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
  playRound("scissors");
});