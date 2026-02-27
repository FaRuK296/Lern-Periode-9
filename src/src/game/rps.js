const options = ["rock", "paper", "scissors"];

function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * options.length); 
    return options[randomIndex];
}


module.exports = { getRandomChoice };

