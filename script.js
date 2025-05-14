let menus = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');


menuBtn.addEventListener('click', () => {
    menus.style.right = '0';
});

closeBtn.addEventListener('click', () => {
    menus.style.right = '-100%';
});