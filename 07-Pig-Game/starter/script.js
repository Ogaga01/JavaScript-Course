'use strict';

let playerOneScore = document.getElementById('score--0')

let playerTwoScore = document.getElementById('score--1');

let playerOneCurrentScore = document.getElementById('current--0');

let playerTwoCurrentScore = document.getElementById('current--1');

let dice = document.querySelector('.dice')

playerOneScore.textContent = 0
playerTwoScore.textContent = 0
dice.classList.add('hidden')
