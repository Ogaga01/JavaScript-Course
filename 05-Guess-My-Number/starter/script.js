'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = '🎉 Correct Number!'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 56

const secretNumber = Math.trunc(Math.random() * 20 + 1)

let score = 20


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number ❗';
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number !';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').classList.add('bg')
        document.querySelector('.number').classList.add('wide')
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                'Too High 📈';
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                '💥 Game over';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').classList.add('bg2')
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                'Too Low 📉';
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent =
                '💥 Game over';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').classList.add('bg2');
        }
    }
})
