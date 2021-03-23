const btn = document.querySelector('#btn');
const nav = document.querySelector('.nav-list');
const mainNav = document.querySelector('.main-nav');
const displayNoneShow = document.getElementById('display-none');
const header = document.querySelector('.head-title');
const mobileNav = document.querySelector('.mobile-show-nav');

let navShownButton = document.createElement('button');
navShownButton.innerHTML = "&#10140";

btn.addEventListener('click', ()=>{
    displayNoneShow.style.display = "block";
    nav.classList.add('animated');
    nav.classList.add('slideInLeft');
    mainNav.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    mainNav.replaceChild(navShownButton, btn);
    header.style.marginLeft = "25px";
    nav.classList.remove('slideOutLeft');
    navShownButton.classList.add('rotate');
})

navShownButton.addEventListener('click', () => {
    nav.classList.remove('slideInLeft');
    mainNav.style.background = "none";
    mainNav.replaceChild(btn, navShownButton);
    nav.classList.add('animated');
    nav.classList.add('slideOutLeft');
    header.style.marginLeft = "-25px";
    btn.classList.add('rotateReverse');
})
