# project related to DOM

# Solution code

# project 4 (Guess the number)

```javascript
let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (playgame) {
    const guess = parseInt(userinput.value);
    validguess(guess);
  }
});

function validguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    prevguess.push(guess);
    displayguess(guess);

    if (numguess > 10) {
      displaymessage(`Game Over! Number was ${randomNumber}`);
      endgame();
    } else {
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage('You guessed it right!');
    endgame();
  } else if (guess < randomNumber) {
    displaymessage('Number is too low');
  } else {
    displaymessage('Number is too high');
  }
}

function displayguess(guess) {
  userinput.value = '';
  guessslot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${11 - numguess}`;
  numguess++;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame">Start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}
function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}

```
