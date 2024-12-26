const navBtn = document.body.querySelector('.btn-ham');
const imgHam = document.body.querySelector('.img-ham');
const Navlist = document.body.querySelector('.navlist-wrapper');

let isNavbarOpen = false;

navBtn.addEventListener('click', () => {
    if (isNavbarOpen) {
        isNavbarOpen = false;
        imgHam.src = './images/icon-hamburger.svg';
        navBtn.setAttribute('aria-expanded', 'false');
        Navlist.classList.add('hidden');
    } else {
        isNavbarOpen = true;
        imgHam.src = './images/icon-close.svg';
        navBtn.setAttribute('aria-expanded', 'true');
        Navlist.classList.remove('hidden');
    }
})