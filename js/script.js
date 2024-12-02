// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Selecione todos os links
const links = document.querySelectorAll('.nossa-empresa, .trabalho-turma');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Remove a classe 'active' de todos os links
        links.forEach(l => l.classList.remove('active'));
        // Adiciona a classe 'active' ao link clicado
        link.classList.add('active');
    });
});

// Botão de Voltar ao Topo
const backToTopButton = document.getElementById('backToTop');

// Mostrar ou ocultar o botão com base na posição da rolagem
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Exibe o botão ao rolar 200px para baixo
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Suavidade na rolagem
    });
});


// Script para alternar visibilidade da descrição

document.getElementById('toggleDescription').addEventListener('click', function () {
    const fullDescription = document.getElementById('fullDescription');
    const icon = this.querySelector('i');

    // Alterna a visibilidade da descrição
    if (fullDescription.classList.contains('d-none')) {
        fullDescription.classList.remove('d-none');  // Exibe a descrição
        icon.classList.remove('fa-chevron-down');   // Muda o ícone
        icon.classList.add('fa-chevron-up');        // para seta para cima
    } else {
        fullDescription.classList.add('d-none');    // Oculta a descrição
        icon.classList.remove('fa-chevron-up');    // Muda o ícone
        icon.classList.add('fa-chevron-down');      // para seta para baixo
    }
});

// Seleciona o botão de toggle e o conteúdo da descrição
const toggleButton = document.getElementById('toggleQuizDescription');
const fullDescription = document.getElementById('fullQuizDescription');

// Função para alternar a visibilidade da descrição
toggleButton.addEventListener('click', function () {
    // Alterna a classe 'd-none' para mostrar ou esconder a descrição
    fullDescription.classList.toggle('d-none');

    // Alterna o ícone da seta (muda de cima para baixo)
    const icon = toggleButton.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
});

// Script para alternar visibilidade da descrição do site
document.getElementById('toggleSiteDescription').addEventListener('click', function () {
    const fullSiteDescription = document.getElementById('fullSiteDescription');
    const icon = this.querySelector('i');

    // Alterna a visibilidade da descrição
    if (fullSiteDescription.classList.contains('d-none')) {
        fullSiteDescription.classList.remove('d-none');  // Exibe a descrição
        icon.classList.remove('fa-chevron-down');       // Muda o ícone
        icon.classList.add('fa-chevron-up');            // para seta para cima
    } else {
        fullSiteDescription.classList.add('d-none');    // Oculta a descrição
        icon.classList.remove('fa-chevron-up');         // Muda o ícone
        icon.classList.add('fa-chevron-down');          // para seta para baixo
    }
});

// Script para alternar visibilidade da descrição dos cartazes
document.getElementById('toggleCartazesDescription').addEventListener('click', function () {
    const fullCartazesDescription = document.getElementById('fullCartazesDescription');
    const icon = this.querySelector('i');

    // Alterna a visibilidade da descrição
    if (fullCartazesDescription.classList.contains('d-none')) {
        fullCartazesDescription.classList.remove('d-none');  // Exibe a descrição
        icon.classList.remove('fa-chevron-down');           // Muda o ícone
        icon.classList.add('fa-chevron-up');                // para seta para cima
    } else {
        fullCartazesDescription.classList.add('d-none');    // Oculta a descrição
        icon.classList.remove('fa-chevron-up');             // Muda o ícone
        icon.classList.add('fa-chevron-down');              // para seta para baixo
    }
});
