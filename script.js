const burgerIcon = document.querySelector('.header__burger-icon');
const navList = document.querySelector('.header__nav-list');

if (burgerIcon && navList) {

    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('is-active');
        navList.classList.toggle('is-active');
    })
}