// Mostrar ou ocultar o botão "Voltar ao topo" conforme o rolar da página
window.addEventListener('scroll', function() {
    const button = document.getElementById('back-to-top');
    if (window.scrollY > 180) { // Aparece quando o usuário rola para baixo da primeira seção
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

// Voltar ao topo da página ao clicar no botão
document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
