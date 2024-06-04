let randomNum = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const startOver = document.querySelector('.resultParas');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let prevGuess =[]
let nuGuess = 1
let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
         e.preventDefault()
         const guess =parseInt(UserInput.value());
         validateGuess(guess)
     });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (nuGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
 if(guess == randomNum){
    displayMessage(`You have choosen correct number`)
    endGame()
 }
 else if(guess<randomNum){
    displayMessage(`Your guess is too low`)
 }
 else if(guess>randomNum){
    displayMessage(`Your guess is too high`)
 }
}
function displayGuess(guess){
UserInput.value =''  // clean krdia value ko
guessSlot.innerHTML += `${guess},`;
nuGuess++;
remaining.innerHTML =  `${11-nuGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2 >${message}</h2>`
}


function newGame() {
    const newGameBut = document.querySelector('#newGame');
    newGameBut.addEventListener('click', function(e) {
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        nuGuess = 1;
        UserInput.removeAttribute('disabled');
        startOver.removeChild(p);
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - nuGuess}`;
        lowOrHi.innerHTML = '';
        playGame = true;
    });
}

function endGame() {
    UserInput.value = '';
    UserInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


// let randomNum = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const UserInput = document.querySelector('#guessField');
// const startOver = document.querySelector('.resultParas');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const p = document.createElement('p');

// let prevGuess = [];
// let nuGuess = 1;
// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click', function(e) {
//         e.preventDefault();
//         const guess = parseInt(UserInput.value);
//         validateGuess(guess);
//     });
// }

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert('Please enter a valid number');
//     } else if (guess < 1) {
//         alert('Please enter a number more than 1');
//     } else if (guess > 100) {
//         alert('Please enter a number less than 100');
//     } else {
//         prevGuess.push(guess);
//         if (nuGuess === 11) {
//             displayGuess(guess);
//             displayMessage(`Game Over. Random number was ${randomNum}`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     if (guess === randomNum) {
//         displayMessage(`You have chosen the correct number!`);
//         endGame();
//     } else if (guess < randomNum) {
//         displayMessage(`Your guess is too low`);
//     } else if (guess > randomNum) {
//         displayMessage(`Your guess is too high`);
//     }
// }

// function displayGuess(guess) {
//     UserInput.value = '';  // clear the input value
//     guessSlot.innerHTML += `${guess}, `;
//     nuGuess++;
//     remaining.innerHTML = `${11 - nuGuess}`;
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function newGame() {
//     const newGameBut = document.querySelector('#newGame');
//     newGameBut.addEventListener('click', function(e) {
//         randomNum = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         nuGuess = 1;
//         UserInput.removeAttribute('disabled');
//         startOver.removeChild(p);
//         guessSlot.innerHTML = '';
//         remaining.innerHTML = `${11 - nuGuess}`;
//         lowOrHi.innerHTML = '';
//         playGame = true;
//     });
// }

// function endGame() {
//     UserInput.value = '';
//     UserInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }












