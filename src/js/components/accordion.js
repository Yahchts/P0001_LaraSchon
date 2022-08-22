let acc = document.querySelectorAll('.accordion__button');

function closeAll(index) {

    for (let i = 0; i < acc.length; i++) {

        if (i !== index) {
            acc[i].parentElement.classList.remove('active');
        }

    }
}

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {

        closeAll(i);
        this.parentElement.classList.toggle('active');

    });
}