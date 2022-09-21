'use strict';

let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
const rollDice = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
let currentScore = 0;

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add('hidden');
let activePlayer = 0;

rollDice.addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 6 + 1);
  console.log(random);

  dice.classList.remove('hidden');
  dice.src = `dice-${random}.png`;

  if (random !== 1) {
    currentScore += random;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');

    currentScore = 0;
  }
});


