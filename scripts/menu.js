const btnMenu = document.querySelector('.menu-hamburguer');

btnMenu.addEventListener('click', () => {
    document.querySelector('.cabecalho__nav__items').classList.toggle('hidden');
    document.querySelector('.menu-hamburguer').classList.toggle('menu-ativo');
    document.querySelector('#desenho-barras').classList.toggle('fa-rotate-90');
})



// Seleciona o botão no header
const meuBotao = document.querySelector('.cabecalho__btn-hamburguer');
// Seleciona todas as seções
const secao = document.querySelector('.secao__inicio');

// Função para verificar a posição do scroll
function verificarPosicaoScroll() {
    // Obtém a posição atual do scroll
    const posicaoScroll = window.scrollY;
    
    // Verifica em qual seção o usuário está
        const secaoTopo = secao.offsetTop;
        const secaoBottom = secaoTopo + secao.offsetHeight;
        
        if (posicaoScroll >= secaoTopo && posicaoScroll < secaoBottom) {
            // Se o usuário está dentro da seção, mostra o botão
            meuBotao.style.display = 'none';
        } else {
            // Se o usuário não está na seção, oculta o botão
            meuBotao.style.display = 'block';
    }
}

// Adiciona um evento de rolagem para verificar a posição do scroll
window.addEventListener('scroll', verificarPosicaoScroll);