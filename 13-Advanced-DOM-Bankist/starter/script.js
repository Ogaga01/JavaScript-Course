'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('.header')

const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = `We use cookies to improve app functionalities. 
<button class='btn btn--close-cookie'>
Got it!
</button>`;
header.prepend(message)
const btnCloseCookie = document.querySelector('.btn--close-cookie')
btnCloseCookie.addEventListener('click', () => {
  // header.removeChild(message)
  // message.remove()
  message.parentElement.removeChild(message)
})

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', () => {
  const s1cords = section1.getBoundingClientRect()
  // console.log(s1cords)
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords + window.pageYOffset,
  //   behavior: "smooth"
  // })

  section1.scrollIntoView({behavior: "smooth"})
})
