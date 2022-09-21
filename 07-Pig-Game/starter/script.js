'use strict';

let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
const rollDice = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let playing = true

let scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  currentScore = 0;
};

rollDice.addEventListener('click', function () {
    if (playing) {
       const random = Math.trunc(Math.random() * 6 + 1);
       console.log(random);

       dice.classList.remove('hidden');
       dice.src = `dice-${random}.png`;

       if (random !== 1) {
         currentScore += random;
         document.getElementById(`current--${activePlayer}`).textContent =
           currentScore;
       } else {
         switchPlayer();
       } 
    }
});

hold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            dice.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }
});

newGame.addEventListener('click', function () {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    activePlayer = 0
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    scores = [0, 0]
    currentScore = 0
    playerOneCurrentScore.textContent = 0
    playerTwoCurrentScore.textContent = 0
    document.getElementById('score--0').textContent = scores[0];
    document.getElementById('score--1').textContent = scores[1];
})
