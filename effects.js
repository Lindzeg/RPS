/*
  text animation function
*/

const gameIntro = document.querySelector(".game-intro");
const text = `Welcome to Rock paper Scissors \n Play 5 rounds and see who wins`;


function textTypingEffect(element, text, i = 0){

    if (i === 0){
        element.textContent = "";
    }

    element.textContent += text[i]; 
    
    if ( i === text.length - 1){
        return;
    }
    
    setTimeout(() => textTypingEffect(element, text, i + 1), 50 );
}

textTypingEffect(gameIntro, text);
