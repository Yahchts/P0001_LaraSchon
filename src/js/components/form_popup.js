const darkCover = document.querySelector('.dark__cover');
const popupSuccess = document.querySelector('.form__popup');
const popupButton = document.querySelector('.form__popup-button');


function closeSuccessPopup() {
    darkCover.classList.remove('show');
    popupSuccess.classList.remove('show');
}


if (popupSuccess) {
    popupButton.addEventListener('click', closeSuccessPopup);
}

