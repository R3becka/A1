//VARIABLES
//BUTTON
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let evaluationText = document.getElementById("evaluationText");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");



//DATA

 let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;


//Process
button0.addEventListener("click", ()=> {
  getRandomNumberPlayer();
  getRandomNumberAi();
  showPlayerRollResult();
  showAiRollResult();
  evaluateRoll();
  updateScores();

})

//CONTROLLER
function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1 + " player rolled"

}
function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1
}
function evaluateRoll() {
  if (playerRoll > aiRoll) {
    evaluationText.innerHTML= "You Win";
    playerScore ++;
  }
  else if (playerRoll < aiRoll) {
    evaluationText.innerHTML = "Ai Wins";
    aiScore++;
  }
  else {
    evaluationText.innerHTML = "It's a draw";
  }



  }
function showPlayerRollResult() {
  playerRollText.innerHTML = playerRoll;
}
function showAiRollResult() {
 aiRollText.innerHTML = aiRoll;
}
function updateScores() {
  playerScoreText.innerHTML = playerScore;
  aiScoreText.innerHTML = aiScore;
}
