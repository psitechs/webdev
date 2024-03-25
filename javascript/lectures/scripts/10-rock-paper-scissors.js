let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};
updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lost!";
    } else if (computerMove === "Paper") {
      result = "You won!";
    } else {
      result = "Tie!";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Paper") {
      result = "You lost!";
    } else if (computerMove === "Scissors") {
      result = "You won!";
    } else {
      result = "Tie!";
    }
  } else {
    if (computerMove === "Scissors") {
      result = "You lost!";
    } else if (computerMove === "Rock") {
      result = "You won!";
    } else {
      result = "Tie!";
    }
  }

  if (result === "You lost!") {
    score.losses += 1;
  } else if (result === "You won!") {
    score.wins += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  console.log(localStorage.getItem("score"));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-moves").innerHTML = `
  You
<img class="move-icon" src="../imgs/${playerMove}-emoji.png" alt="">
<img class="move-icon" src="../imgs/${computerMove}-emoji.png" alt="">
Computer
`;
}
updateResultsElement();
