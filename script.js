// Adicionar ao arquivo existente

// Carrossel automático
const initCarousel = () => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 300;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const autoScroll = () => {
        if (scrollAmount >= maxScroll) {
            scrollAmount = 0;
            carousel.scrollTo({ left: 0, behavior: 'instant' });
        } else {
            scrollAmount += scrollStep;
            carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    let interval = setInterval(autoScroll, 3000);

    carousel.addEventListener('mouseenter', () => clearInterval(interval));
    carousel.addEventListener('mouseleave', () => {
        interval = setInterval(autoScroll, 3000);
    });

    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        scrollAmount += e.deltaY;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});