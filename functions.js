let humanScore =  0;
let computerScore  =  0;

/*
    create a function that returns the user input and 
    validates the answer with the required values.
*/
function getHumanChoice(){
    // introduction
    alert("Lets play a game, choose one of the following: Rock, Paper or Scissors");

    // set user input and open a prompt    
    var userInput = prompt('What will it be?').toLowerCase();
    
    // validate the user input and check if it corresponds with set values
    validateChoices = ["rock", "paper", "scissors"];
    if (validateChoices.includes(userInput)){
            console.log(`You choose ${userInput}`);  
        } else if(userInput == ""){
            console.log("You chickened out? Choose your answer");
        } else if (userInput !== validateChoices) {
            console.log("Sorry your input does not match the required answers. Choose Rock, Paper or Scissors");
        } else {
            console.log("tired yet?");
        } 
                                                                                              
    return userInput;
}

/* 
    create a function that returns one of the following strings: 
    rock - paper - scissor
*/
function getComputerChoice(){
    // use math.random to return a random value between 0 - 2
    let num = Math.floor(Math.random() * 3);
    let value;
    // switch values based on the output that is given by num.
    switch (num){
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
    };
    // return the needed value
    console.log(`The computer chooses ${value}`);
    return value;
}

/*
    take human and computer ... as arguments
    play a single round
    increment round winners score 
    log winner announcement
*/

function playRound(humanchoice, computerChoice){
    humanchoice = getHumanChoice();
    computerChoice = getComputerChoice();

    //declare a winner based on computer answer and human answer
    if(computerChoice === 'paper' & humanchoice === 'rock'){
        console.log('Computer wins, paper beats rock!');
        computerScore++;
        console.log(`Computer gets a point. ${computerScore}`);
    } else if(computerChoice === 'rock' & humanchoice === 'paper'){
        console.log('You win, paper beats rock!');
        humanScore++;
        console.log(`You get a point. ${humanScore}`);
    } else if(computerChoice === 'rock' & humanchoice === 'rock'){
        console.log('Its a tie! Try again.');
    } else if(computerChoice === 'rock' & humanchoice === 'scissors'){
        console.log('Computer wins, rock beats scissors!');
        humanScore++;
        console.log(`Computer gets a point. ${computerScore}`);
    } else if(computerChoice === 'scissors' & humanchoice === 'rock'){
        console.log('You win, rock beats scissors!');
        humanScore++;
        console.log(`You get a point. ${humanScore}`);
    } else if(computerChoice === 'scissors' & humanchoice === 'scissors'){
        console.log('Its a tie! Try again.');
    } else if(computerChoice === 'scissors' & humanchoice === 'paper'){
        console.log('Computer wins, scissors beats paper!');
        computerScore++;
        console.log(`Computer gets a point. ${computerScore}`);
    } else if(computerChoice === 'paper' & humanchoice === 'scissors'){
        console.log('You win, scissors beats paper!');
        humanScore++;
        console.log(`you get a point. ${humanScore}`);
    } else if(computerChoice === 'paper' & humanchoice === 'paper'){
        console.log('Its a tie! Try again.');
    }
}

playRound();
