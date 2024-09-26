//VARIABLES
//BUTTON
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let evaluationText = document.getElementById("evaluationText");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");
let drawResultText = document.getElementById("drawResultText");
//DATA
 let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;
let drawResult =0;


//Process
button0.addEventListener("click", function() {
  getRandomNumberPlayer();
  getRandomNumberAi();
  showPlayerRollResult();
  showAiRollResult();
  evaluateRoll();
  updateScores();
})

//CONTROLLER
function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1
}

function getRandomNumberAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1
}

function evaluateRoll() {
  if (playerRoll > aiRoll) {
    evaluationText.innerHTML= "<span style='color: green;'>You Win!</span>";
    playerScore ++;
  }
  else if (playerRoll < aiRoll) {
    evaluationText.innerHTML = "<span style='color: red;'>Ai Wins</span>";
    aiScore++;
  }
  else if (playerRoll === aiRoll) {
    evaluationText.innerHTML = "<span style='color: yellow;'>It's a draw</span>";
drawResult++;
  }
}

function showPlayerRollResult() {
  playerRollText.innerHTML = "Player rolled " + playerRoll;
}

function showAiRollResult() {
 aiRollText.innerHTML = "AI rolled: " + aiRoll;
}

function updateScores() {
  playerScoreText.innerHTML = "Player total wins: " + playerScore.toString();
  aiScoreText.innerHTML = "AI total wins. " + aiScore.toString();
  drawResultText.innerHTML = "Total Draws: " + drawResult;
}

document.cookie = "todaysDay=Thursday: expires=Thu, 29 Sep 2024 00:00;00 GMT";


