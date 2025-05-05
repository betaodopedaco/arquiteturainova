document.addEventListener('DOMContentLoaded', function() {
    const postImages = document.querySelectorAll('.post img');

    function verificarVisibilidade() {
        postImages.forEach(img => {
            const rect = img.getBoundingClientRect();
            const isVisivel = (rect.top >= 0 && rect.bottom <= window.innerHeight);

            if (isVisivel) {
                img.classList.add('aparecer');
            }
        });
    }

    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade(); // Verifica na carga inicial da página
});
