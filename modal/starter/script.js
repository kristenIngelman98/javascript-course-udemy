'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);


const openModal = function() {
    console.log('Button Clicked')
    // removing hidden class from .modal & .overlay classes to show the modal when clicked
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Get textContent of all .show-modal class
for (let i = 0; i < btnOpenModal.length; i++) 
    btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// this function will be executed whenever a key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // if modal does NOT include hidden class then close the modal
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});