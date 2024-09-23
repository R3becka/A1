//VARIABLES
//BUTTON
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");


//DATA
let playerRoll = 0;
let aiRoll = 0;
let winner = 0;


//Process
button0.addEventListener("click", function() {
  getRandomNumberPlayer();
  getRandomNumberAi();
  showPlayerRollResult();
  showAiRollResult();
  showResult();

})

//CONTROLLER
function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1

}
function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1
}
function result() {
  if (aiRoll > playerRoll) {
    resultText = "AI Wins";
  }
  else if (playerRoll > aiRoll) {
    resultText = "Player Wins";
  }
  else {
    resultText = "It's a draw";
  }
}

  function showResult () {
    resultText = "Result: " + winner;
  }
function showPlayerRollResult() {
  playerRollText.innerHTML = "Player " + playerRoll;
}
function showAiRollResult() {
 aiRollText.innerHTML = "AI " + aiRoll;
}
