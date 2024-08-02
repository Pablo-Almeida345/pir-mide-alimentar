let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalItems = carousel.children.length;
    const itemWidth = carousel.children[0].offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}