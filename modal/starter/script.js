'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

// Get textContent of all .show-modal class
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function() {
        console.log('Button Clicked')
        // removing hidden class from .modal & .overlay classes to show the modal when clicked
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}