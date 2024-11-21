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
