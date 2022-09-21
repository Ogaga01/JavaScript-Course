'use strict';

let playerOneScore = document.getElementById('score--0')
let playerTwoScore = document.getElementById('score--1');
let playerOneCurrentScore = document.getElementById('current--0');
let playerTwoCurrentScore = document.getElementById('current--1');
const rollDice = document.querySelector('.btn--roll')
let dice = document.querySelector('.dice')
let currentScore = 0

playerOneScore.textContent = 0
playerTwoScore.textContent = 0
dice.classList.add('hidden')

rollDice.addEventListener('click', function () {
    const random = Math.trunc(Math.random() * 6 + 1);
    console.log(random)

    dice.classList.remove('hidden')
    dice.src = `dice-${random}.png`

    if (random !== 1) {
        currentScore += random
        playerOneCurrentScore.textContent = currentScore
    } else {
        currentScore = 0
        playerOneCurrentScore.textContent = currentScore;
    }
})