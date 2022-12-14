'use strict';

const btnModal = document.querySelectorAll('.show-modal')

const btnClose = document.querySelector('.close-modal')

const overLay = document.querySelector('.overlay')

const modal = document.querySelector('.modal')

const openModal = function () {
    modal.classList.remove('hidden')
    overLay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overLay.classList.add('hidden')
}

btnModal.forEach((button)=>{
    button.addEventListener('click', openModal)
})

btnClose.addEventListener('click', closeModal)
overLay.addEventListener('click', closeModal)

document.addEventListener('keypress', function (e) {
    
    if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
        e.preventDefault()
        closeModal()
    }
})