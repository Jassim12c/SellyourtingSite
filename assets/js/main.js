const btn = document.querySelector('#btn');
const nav = document.querySelector('.nav-list');
const mainNav = document.querySelector('.main-nav');
const displayNoneShow = document.getElementById('display-none');
const header = document.querySelector('.head-title');

let x = document.createElement('button');
x.innerHTML = "X";

btn.addEventListener('click', ()=>{
    displayNoneShow.style.display = "block";
    nav.classList.add('animated');
    nav.classList.add('slideInLeft');
    mainNav.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    mainNav.replaceChild(x, btn);
    header.style.marginLeft = "10px";
    nav.classList.remove('slideOutLeft');
})

x.addEventListener('click', () => {
    nav.classList.remove('slideInLeft');
    mainNav.style.background = "none";
    mainNav.replaceChild(btn, x);
    nav.classList.add('animated');
    nav.classList.add('slideOutLeft');
    header.style.marginLeft = "-10px";
})
