let humanScore = 0;
let computerScore = 0;
const rules = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];


/*
    create a function that returns the user input and 
    validates the answer against the allowed values.
*/

function getHumanChoice() {
let userInput

// introduction
alert("Let's play a game, choose one of the following: Rock, Paper or Scissors");
// set user input and open a prompt
userInput = prompt("What will it be?");

// validate the user input and check if it corresponds with set values
let validateChoices = ["rock", "paper", "scissors"];

    if ((userInput === null) || (userInput === "")) {
        console.log("Sorry your input does not match the required answers. Choose Rock, Paper or Scissors");
        return null;
    } 
    
    userInput = userInput.toLowerCase();

    if (!validateChoices.includes(userInput)) {
        console.log( "Sorry your input does not match the required answers. Choose Rock, Paper or Scissors");
        return null;
    }

    if (validateChoices.includes(userInput)) {
        console.log(`You choose ${userInput}`);
    }

return userInput;
}

/* 
    create a function that returns one of the following strings: 
    rock - paper - scissors
*/

function getComputerChoice() {
  // use math.random to return a random value between 0 - 2
  let num = Math.floor(Math.random() * 3);
  let value;

  // switch values based on the output that is given by num.
  switch (num) {
    case 0:
      value = "rock";
      break;
    case 1:
      value = "paper";
      break;
    case 2:
      value = "scissors";
      break;
    default:
      value = "Sorry we could not process your request";
  }

  console.log(`The computer chooses ${value}`);
  return value;
}

/*
    take human and computer choices as arguments
    play a single round
    keeps track of round winners score 
    log winner announcement
*/

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();

  //check if humanchoice is null, if so, stop the function
  if (humanChoice === null) {
    return null;
  } else {
    //only if humanChoice is not null, call getComputerChoice()
    computerChoice = getComputerChoice();
    // first index in rules array is set to winner, second is loser.
    // If humanchoice relates to first index then you win, if not computer wins
    const humanWins = rules.some(
      ([winner, loser]) => winner === humanChoice && loser === computerChoice
    );
    const computerWins = rules.some(
      ([winner, loser]) => winner === computerChoice && loser === humanChoice
    );
    //declare a winner based on computer answer and human answer
    if (humanChoice === computerChoice) {
      console.log("Its a tie! Try again.");
    } else if (humanWins) {
      console.log(`You win ${humanChoice} beats ${computerChoice}`);
      humanScore++;
      console.log(`You get a point. ${humanScore}`);
    } else if (computerWins) {
      console.log(`Computer wins ${computerChoice} beats ${humanChoice}`);
      computerScore++;
      console.log(`Computer gets a point. ${computerScore}`);
    }
  }

  return {
    humanChoice: humanChoice,
    computerChoice: computerChoice,
    humanScore: humanScore,
    computerScore: computerScore,
  };
}

/*
    calls playRound() 5 times
    declares a winner after 5 rounds  
    logs total score
*/

function playGame() {
  let totalGame = 5;
  for (round = 1; round <= totalGame; round++) {
    console.log(`Started round ${round} of ${totalGame}`);
    let result = playRound();
    if (result == null) {
      break;
    } else {
      if (round == totalGame) {
        if (humanScore < computerScore) {
          console.log(`The winner is computer with ${computerScore} points`);
          console.log(`round ${round} of ${totalGame}`);
          console.log(`End of game`);
          break;
        } else if (computerScore < humanScore) {
          console.log(`The winner is you with ${humanScore} points`);
          console.log(`round ${round} of ${totalGame}`);
          console.log(`End of game`);
          break;
        } else if (computerScore === humanScore) {
          console.log(`Its a tie! There is no winner`);
          console.log(`round ${round} of ${totalGame}`);
          console.log(`End of game`);
          break;
        }
      }
    }
  }
}
playGame();
