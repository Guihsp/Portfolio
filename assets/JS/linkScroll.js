const menuItems = document.querySelectorAll(`#nav-bar .nav-link[href^="#"]`);

menuItems.forEach(item => {
    item.addEventListener(`click`, scrollTOIdOnClick);
})

function scrollTOIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute(`href`);
    const section = document.querySelector(id).offsetTop;

    window.scroll({
        top: section - 60
    })
}