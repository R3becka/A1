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

loadGame();
updateScores();
//Process
button0.addEventListener("click", function() {
  getRandomNumberPlayer();
  getRandomNumberAi();
  showPlayerRollResult();
  showAiRollResult();
  evaluateRoll();
  updateScores();
  saveAsCookie();
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

//COOKIE

function saveAsCookie(){
  document.cookie = "playerScore=" + playerScore + "; expires = Thu, 18 Dec 2024 12:00:00 UTC";
  document.cookie = "aiScore=" + aiScore + "; expires = Thu, 18 Dec 2024 12:00:00 UTC";
  document.cookie = "drawResult=" + drawResult + "; expires = Thu, 18 Dec 2024 12:00:00 UTC";
  }

function loadGame (){
  playerScore = getCookie ("playerScore");
  aiScore = getCookie ("aiScore");
  drawResult = getCookie ("drawResult");

}
function getCookie(cname){
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i<ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
