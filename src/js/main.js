const moduleButton = document.querySelector('.module__button');
const popup = document.querySelector('.alert');
const alertOverlay = document.querySelector('.alert-overlay');
const closeButton = document.querySelector('.alert__close');

moduleButton.addEventListener('click', event => {
    alertOverlay.classList.toggle('alert-overlay--hide');
    popup.classList.toggle('alert--hide');
})

closeButton.addEventListener('click', event => {
    alertOverlay.classList.toggle('alert-overlay--hide');
    popup.classList.toggle('alert--hide');
})