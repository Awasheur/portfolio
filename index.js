function zoomer(element) {
    element.style.transform = 'scale(1.2)';
    element.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
}

function dezoomer(element) {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
}

document.querySelectorAll('.lien-anime').forEach(lien => {
    lien.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
