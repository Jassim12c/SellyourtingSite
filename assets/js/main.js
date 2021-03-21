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
    nav.classList.add('slideInRight');
    mainNav.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
    mainNav.replaceChild(x, btn);
})

x.addEventListener('click', () => {
    displayNoneShow.style.display = "none";
    x.classList.add('animated');
    x.classList.add('slideInLeft');
    mainNav.style.background = "none";
    mainNav.replaceChild(btn, x);
})
