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
    let userInput = prompt('What will it be?'.toLowerCase());
    // validate the user input and check if it corresponds with set values
    validateChoices = ["rock", "paper", "scissors"];
   
    if (userInput === null | userInput == ""){
        return null;          
    } else {
        if (!validateChoices.includes(userInput)) {
            console.log("Sorry your input does not match the required answers. Choose Rock, Paper or Scissors"); 
            return null;        
        } else if (validateChoices.includes(userInput)){             
            console.log(`You choose ${userInput}`);
        }
    }
                                                                                    
    return userInput; 
}

/* 
    create a function that returns one of the following strings: 
    rock - paper - scissors
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
    take human and computer choices as arguments
    play a single round
    keeps track of round winners score 
    log winner announcement
*/

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    //check if humanchoice is null, if so, stop the loop
    if(humanChoice === null){
        return null;
    } else{
        //only if humanChoice is not null, call getComputerChoice()
        computerChoice = getComputerChoice();
       //declare a winner based on computer answer and human answer
       //note to self: make this absurdly long statement shorter
        if(computerChoice === 'paper' && humanChoice === 'rock'){
            console.log('Computer wins, paper beats rock!');
            computerScore++;
            console.log(`Computer gets a point. ${computerScore}`);
        } else if(computerChoice === 'rock' && humanChoice === 'paper'){
            console.log('You win, paper beats rock!');
            humanScore++;
            console.log(`You get a point. ${humanScore}`);
        } else if(computerChoice === 'rock' && humanChoice === 'rock'){
            console.log('Its a tie! Try again.');
        } else if(computerChoice === 'rock' && humanChoice === 'scissors'){
            console.log('Computer wins, rock beats scissors!');
            computerScore++;
            console.log(`Computer gets a point. ${computerScore}`);
        } else if(computerChoice === 'scissors' && humanChoice === 'rock'){
            console.log('You win, rock beats scissors!');
            humanScore++;
            console.log(`You get a point. ${humanScore}`);
        } else if(computerChoice === 'scissors' && humanChoice === 'scissors'){
            console.log('Its a tie! Try again.');
        } else if(computerChoice === 'scissors' && humanChoice === 'paper'){
            console.log('Computer wins, scissors beats paper!');
            computerScore++;
            console.log(`Computer gets a point. ${computerScore}`);
        } else if(computerChoice === 'paper' && humanChoice === 'scissors'){
            console.log('You win, scissors beats paper!');
            humanScore++;
            console.log(`you get a point. ${humanScore}`);
        } else if(computerChoice === 'paper' && humanChoice === 'paper'){
            console.log('Its a tie! Try again.');
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

function playGame(){
    let totalGame = 5;
    let round = 1;
    while (round <= totalGame){
        if(playRound()){
            round++;
            if(round == totalGame){
                console.log(`End of game`)
                if(humanScore < computerScore){
                    console.log(`The winner is computer with ${computerScore} points`);
                } else if(computerScore < humanScore){
                    console.log(`The winner is you with ${humanScore} points`);
                } else if(computerScore == humanScore){
                    console.log(`Its a tie!`);
                }
            } 
        } 
        else{
            break;
        }        
    }
}
playGame();

        