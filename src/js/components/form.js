import axios from 'axios';

const form = document.querySelector('.form');
const submit = form.querySelector('button[type=submit]');
const darkCover = document.querySelector('.dark__cover');
const popupSuccess = document.querySelector('.form__popup');
const url = location.origin + '/api/form.php';


if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submit.disabled = true;

        const data = new FormData(form);
        axios.post(url, data)
            .then(function (response) {
                darkCover.classList.add('show');
                popupSuccess.classList.add('show');
                form.reset();
                submit.disabled = false;
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}
