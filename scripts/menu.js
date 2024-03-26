const btnMenu = document.querySelector('.menu-hamburguer');

btnMenu.addEventListener('click', () => {
    document.querySelector('.cabecalho__nav__items').classList.toggle('hidden');
    document.querySelector('.menu-hamburguer').classList.toggle('menu-ativo');
    document.querySelector('#desenho-barras').classList.toggle('fa-rotate-90');
})

