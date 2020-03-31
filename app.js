import compareNumbers from './compareNumbers.js';

// get html elements
const input = document.getElementById('number-guess');
const button = document.getElementById('submit-button');
const triesLeft = document.getElementById('tries-left');
const result = document.getElementById('result');
const triesContainer = document.getElementById('tries-container');

// generate a random number between 1 and 20
const answerNumber = Math.ceil(Math.random() * 20);
console.log(answerNumber);

let triesCount = 4;
triesLeft.textContent = triesCount;

// function logic
function submit() {

    
    const userGuess = Number(input.value);

    triesCount--;
    triesLeft.textContent = triesCount;
    

    const checkedNum = compareNumbers(userGuess, answerNumber);

    if (checkedNum === 0) {
        result.textContent = 'You win!';
        disableGameplay();
        triesContainer.style.display = 'none';
        // break out of function because of win
        return;

    } else if (checkedNum === -1) {
        
        result.textContent = 'Too low';
    } else if (checkedNum === 1) {
        
        result.textContent = 'Too high';
    } 
    
    // run out of tries
    if (triesCount <= 0) {
        disableGameplay();
        result.textContent = 'Sorry, you lose';
    }
    
}


function disableGameplay() {
    button.disabled = true;

}


// event listeners
button.addEventListener('click', submit);