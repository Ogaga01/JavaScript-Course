'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').classList.remove('bg');
  document.querySelector('.number').classList.remove('wide');
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number ❗';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').classList.add('bg');
    document.querySelector('.number').classList.add('wide');

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').classList.add('bg2');
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game over';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').classList.add('bg2');
    }
  }
});
