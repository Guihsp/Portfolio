const btnMobile = document.getElementById('btn-menu');

function toggleMenu( event){
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav-bar');
    nav.classList.toggle(`active`);
}

btnMobile.addEventListener(`click`, toggleMenu);
btnMobile.addEventListener(`touchstart`, toggleMenu);