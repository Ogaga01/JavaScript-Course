'use strict';

const modal = document.querySelectorAll('.show-modal')
console.log(modal)

const display = document.querySelector('.modal')

const closeModal = document.querySelector('.close-modal')

const overLay = document.querySelector('.overlay')

function show () {
  display.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < modal.length; i++){
    modal[i].addEventListener('click', function () {
        display.classList.remove('hidden')
        overLay.classList.remove('hidden')
    })
}

closeModal.addEventListener('click', show)

overLay.addEventListener('click', show);

