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

const btns = [
  document.querySelector("#btnRock"),
  document.querySelector("#btnPaper"),
  document.querySelector("#btnScissors"),
];

const humanChoices = [
  [
    document.querySelector("#userRock"),
    document.querySelector("#btnRock"),
    "rock",
  ],
  [
    document.querySelector("#userPaper"),
    document.querySelector("#btnPaper"),
    "paper",
  ],
  [
    document.querySelector("#userScissors"),
    document.querySelector("#btnScissors"),
    "scissors",
  ],
];

const compChoices = ["rock", "paper", "scissors"];

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
  winnerLog.textContent = "Choose your fighter";
  const humanMove = "You choose: ";

  //set eventListener on a button click that calls playRound and returns a string
  humanChoices.forEach(([img, btn, humanChoice]) => {
    btn.addEventListener("click", () => {
      currentRound++;
      if (currentRound < totalRounds) {
        img.classList.add("show");
        userMove.textContent = humanMove + humanChoice;
        playRound(humanChoice);
      } else if (currentRound === totalRounds) {
        playGame();
      }
    });
  });
}

getHumanChoice();

/*------------------

    create a function that:
    returns one of the following strings: rock - paper - scissors,
    logs the computer choice
    gets the related image

----------------------*/

function getComputerChoice() {
  const num = Math.floor(Math.random() * compImg.length);

  compImg[num].classList.add("show");
  computerMove.textContent = `The computer chooses: ${compChoices[num]}`;

  return compChoices[num];
}

/*---------------------------
    take human and computer choices as arguments
    play a single round
    keeps track of round winners score 
    log winner announcement
----------------------------*/

function playRound(humanChoice) {
  if (humanChoice) {
    //call getComputerChoice() once humanChoice is chosen
    computerChoice = getComputerChoice();

    btns.forEach((btn) => {
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
  }

   setTimeout(() => {
    const nextRound = document.querySelector("#btnNextRound");

    nextRound.classList.add("show");
    nextRound.addEventListener(
      "click",
      () => {
        nextRound.classList.remove("show");
        // reset UI
        userImg.forEach((img) => img.classList.remove("show"));
        compImg.forEach((img) => img.classList.remove("show"))
        userMove.textContent = "";
        computerMove.textContent = "";
        // reset instructions and show buttons
        winnerLog.textContent = "Choose your fighter";
        btns.forEach((btn) => (btn.style.display = "block"));
      },
      { once: true }
    );
  }, 1500);

  return {
    humanChoice: humanChoice,
    computerChoice: computerChoice,
    humanScore: humanScore,
    computerScore: computerScore,
  };
}



/*-----------------------
    calls playRound() 5 times
    declares a winner after 5 rounds  
    logs total score
--------------------*/

function playGame() {
  if (currentRound === totalRounds) {
    if (humanScore < computerScore) {
      gameRound.textContent = `The winner is computer with ${computerScore} points \n End of game`;
    } else if (computerScore < humanScore) {
      gameRound.textContent = `The winner is you with ${humanScore} points \n End of game`;
    } else if (computerScore === humanScore) {
      gameRound.textContent = `It's a tie! There is no winner \n End of game`;
    }
  }
}
