let openButton = document.querySelector('#openButton');
let closeButton = document.querySelector('#closeButton');
let mainModal = document.querySelector('#mainModal');

// Open when click
openButton.addEventListener('click', openModal);

closeButton.addEventListener('click', closeModal);



// Function openModal
function openModal() {
	mainModal.style.visibility = 'visible';
}

// Function closeModal
function closeModal() {
	mainModal.style.visibility = 'hidden';
}