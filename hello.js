// hello.js
// This file is the frontend part of the rock-paper-scissors game.


let playerScore = 0;
let enemyScore = 0;

async function startGame() {
  while (playerScore < 3 && enemyScore < 3) {
    let selection = prompt("Enter rock, paper or scissors:");

    if (selection === null) {
      break;
    }

    selection = selection.toLowerCase();

    try {
      const response = await fetch("http://localhost:3000/api/play", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ playerChoice: selection })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        continue;
      }

      alert("Your choice: " + data.playerChoice);
      alert("Enemy choice: " + data.enemyChoice);

      if (data.result === "draw") {
        alert("It's a tie!");
      } else if (data.result === "win") {
        playerScore++;
        alert("You won this round!");
      } else {
        enemyScore++;
        alert("You lost this round!");
      }

      alert("Score → You: " + playerScore + " | Enemy: " + enemyScore);

    } catch (error) {
      alert("Backend error. Is the server running?");
      console.error(error);
      break;
    }
  }

  if (playerScore === 3) {
    alert("You won the match!");
  } else if (enemyScore === 3) {
    alert("Enemy won the match!");
  }
}

startGame();
