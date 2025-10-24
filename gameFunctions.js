let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
const totalRounds = 5;
const rules = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];

//p elements
const textElements = {
  winnerLog: document.querySelector("#winnerLog"),
  gameRound: document.querySelector("#gameRound"),
  userMove: document.querySelector("#userMove"),
  computerMove: document.querySelector("#computerMove"),
};
const { winnerLog, gameRound, userMove, computerMove } = textElements;

//img display for user choices
const userImg = [
  document.querySelector("#userRock"),
  document.querySelector("#userPaper"),
  document.querySelector("#userScissors"),
];


//img display for pc choices
const compImg = [
  document.querySelector("#rock"),
  document.querySelector("#paper"),
  document.querySelector("#scissors"),
];
const compChoices = ["rock", "paper", "scissors"];

const nextRound = document.querySelector("#btnNextRound");
const playAgain = document.querySelector("#btnplayAgain");

/* -----------------

  opens modal window
  starts humanChoice function
  opens playscreen window 

---------------------*/

function startGameIntro() {
  const playscreen = document.querySelector(".modal.playscreen");
  const modal = document.querySelector(".modal");
  const playGameBtn = document.querySelector("#startGame");

  playGameBtn.onclick = function () {
    modal.classList.add("hidden");
    playscreen.classList.add("show");
  };
}

startGameIntro();

/*-------------------

    returns one of the following strings: rock - paper - scissors,
    logs the user choice
    gets the related image
    passes playround in event handler

----------------*/

function getHumanChoice() {
  winnerLog.style.display = "block";
  winnerLog.textContent = "Choose your fighter";
  const humanMove = "You choose: ";

  const humanChoices = [
    [document.querySelector("#userRock"), document.querySelector("#btnRock"), "rock"],
    [document.querySelector("#userPaper"), document.querySelector("#btnPaper"), "paper"],
    [document.querySelector("#userScissors"), document.querySelector("#btnScissors"), "scissors"],
  ];
  //set eventListener on a button click that calls playRound and returns a string
  humanChoices.forEach(([img, btn, humanChoice]) => {
    btn.addEventListener("click", () => {
      currentRound++;
      if (currentRound < totalRounds) {
        img.classList.add("show");
        userMove.textContent = humanMove + humanChoice;
        playRound(humanChoice);
      } else if (currentRound === totalRounds) {
        img.classList.add("show");
        userMove.textContent = humanMove + humanChoice;
        playRound(humanChoice);
        playGame();
      }
    });
  });
}

getHumanChoice();

/*------------------

    selects a random img index
    shows the corresponding image
    links the image to its matching string and logs the choice

----------------------*/

function getComputerChoice() {
  const num = Math.floor(Math.random() * compImg.length);
  
  compImg[num].classList.add("show");
  computerMove.textContent = `The computer chooses: ${compChoices[num]}`;
  console.log(compChoices[num]);
  return compChoices[num];
}

/*---------------------------

    take humanchoice as argument
    play a single round
    keeps track of round winners score 
    log winner announcement

----------------------------*/

function playRound(humanChoice) {
  if (humanChoice) {
    //call getComputerChoice() once humanChoice is chosen
    computerChoice = getComputerChoice();
    getBtns().forEach((btn) => {
      btn.style.display = "none";
    });

    // first index in rules array is set to winner, second is loser.
    // If humanchoice relates to first index then you win, if not computer wins
    const humanWins = rules.some(
      ([winner, loser]) => winner === humanChoice && loser === computerChoice
    );
    const computerWins = rules.some(
      ([winner, loser]) => winner === computerChoice && loser === humanChoice
    );
    gameRound.textContent = `Started round ${currentRound} of ${totalRounds}`;

    //declare a winner based on computer answer and human answer
    if (humanChoice === computerChoice) {
      winnerLog.textContent = "It's a tie! Try again.";
    } else if (humanWins) {
      humanScore++;
      winnerLog.textContent = `You win ${humanChoice} beats ${computerChoice} \n Player: ${humanScore}  Computer: ${computerScore}`;
    } else if (computerWins) {
      computerScore++;
      winnerLog.textContent = `Computer wins ${computerChoice} beats ${humanChoice} \n Player: ${humanScore}  Computer: ${computerScore}`;
    }

    if (currentRound < totalRounds) {
      showNextRoundButton();
    }
  }

  return {
    humanScore: humanScore,
    computerScore: computerScore,
  };
}

/*-----------------------

    declares a winner after 5 rounds  
    logs total score

--------------------*/

function playGame() {
  if (currentRound === totalRounds) {
    winnerLog.style.display = "none";
    if (humanScore < computerScore) {
      gameRound.textContent = `The winner is computer with ${computerScore} points \n End of game`;
    } else if (computerScore < humanScore) {
      gameRound.textContent = `The winner is you with ${humanScore} points \n End of game`;
    } else if (computerScore === humanScore) {
      gameRound.textContent = `It's a tie! There is no winner \n End of game`;
    }
  }
  playNewGame();
}


function playNewGame() {
  setTimeout(() => {
    playAgain.classList.add("show");
    playAgain.addEventListener("click", () => {
      playAgain.classList.remove("show");
      humanScore = 0;
      computerScore = 0;
      currentRound = 0;
      resetUI();
      removeEvents();
      getHumanChoice();
    },
    {once: true}
  );
  }, 500);
}

function showNextRoundButton() {
  setTimeout(() => {
  nextRound.classList.add("show");
  nextRound.addEventListener("click", handleNextRoundClick, { once: true });
  }, 500);
}

function handleNextRoundClick() {
   nextRound.classList.remove("show");
   winnerLog.textContent = "Choose your fighter"
   resetUI();
}

function getBtns() {
  return [
    document.querySelector("#btnRock"),
    document.querySelector("#btnPaper"),
    document.querySelector("#btnScissors"),
  ];
}

function removeEvents() {
  getBtns().forEach((btn) => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });
}

function resetUI(){
  userImg.forEach((img) => img.classList.remove("show"));
  compImg.forEach((img) => img.classList.remove("show"))
  userMove.textContent = "";
  computerMove.textContent = "";
  gameRound.textContent = "";
  getBtns().forEach((btn) => (btn.style.display = "block"));
}