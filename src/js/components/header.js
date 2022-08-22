let header = document.getElementById('header');
let hamburger = document.getElementById('hamburger');

let isMenuOpen = false;

function action() {
    if (isMenuOpen === false) {
        hamburger.classList.add('active');
        header.classList.add('menu-open');
        isMenuOpen = true;
    } else {
        hamburger.classList.remove('active');
        header.classList.remove('menu-open');
        isMenuOpen = false;
    }
}

if (hamburger) {
    hamburger.addEventListener('click', action);
}