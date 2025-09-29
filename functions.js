
// create a function that returns one of the following strings: rock - paper - scissor
function getComputerChoice(){
// use math.random to return a random value between 0 - 2
let num = Math.floor(Math.random() * 3);
let value;
// switch values based on the output that is given by num.
switch (num){
    case 0:
        value = "Rock";
    break;      
    case 1:
        value = "Paper";  
    break;
    case 2:
        value = "Scissors";
    break;
    default: 
        value = "Sorry we could not process your request";
};
// return the needed value
return value;
}

console.log(getComputerChoice());

// create a function that return the user input and validates the answer with the required values.
function getHumanChoice(){
// introduction
alert("Lets play a game, choose one of the following: Rock, Paper or Scissors");

// set user input and open a prompt
let userInput = prompt('What will it be?');
userInput = userInput.toLowerCase();

// validate the user input and check if it corresponds with set values
validateChoices = ["rock", "paper", "scissors"];
if (validateChoices.includes(userInput)){
        console.log(userInput);
    } else if(userInput == ""){
        console.log("You chickened out? Choose your answer");
    } else if (userInput !== validateChoices) {
        console.log("Sorry your input does not match the required answers. Choose Rock, Paper or Scissors");
    } else {
        console.log("tired yet?");
    }

}

console.log(getHumanChoice());