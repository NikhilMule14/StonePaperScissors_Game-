let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawGame = () => {
  msg.innerText = "Game Was Draw.Play Again.. !!";
  msg.style.backgroundColor = "black";
};
const showWinner = (userwin) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win !!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose !!";
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
  // rock, papaer,scissors
};
const playGame = (userChoice) => {
  //genarate computer choice-> modular
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //dro Game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors,rock
      userwin = compChoice === "scissors" ? false : true;
    } else {
      //paper,rock
      userwin = compChoice === "rock" ? false : true;
    }

    showWinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
