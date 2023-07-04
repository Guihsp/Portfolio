// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('#nav-list .nav-item .nav-link[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 100;
  scrollToPosition(to);
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}
