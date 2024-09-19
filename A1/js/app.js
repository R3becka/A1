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



//Process
button0.addEventListener("click", function() {
  getRandomNumberPlayer();
  getRandomNumberAI();
  showPlayerRollResult();
  showComputerRollResult();
  showResult();
});

//CONTROLLER
function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;

}
function getRandomNumberAI() {
  aiRoll = Math.floor(Math.random() * 6) + 1;

if (aiRoll > playerRoll) {
  resultText = ("AI Wins");
}
 else if (playerRoll > aiRoll) {
  showAiRollResult("Player Wins");
}
    else if (aiRoll === playerRoll) {
      showAiRollResult("It's a draw");
}

//VIEWS
}
function showAiRollResult() {
  aiRollText.innerHTML = aiRoll;
 }
  function showResult () {
    resultText.innerHTML = text;
  }
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
function showComputerRollResult() {
 aiRollText.innerHTML = aiRoll;
}
