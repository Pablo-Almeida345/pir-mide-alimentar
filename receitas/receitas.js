const slides = document.querySelectorAll('.slide');
const setaButton = document.querySelector('.seta1');
const seta2Button = document.querySelector('.seta2');
let currentIndex = 0;

const slideWidth = slides[0].clientWidth;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * slideWidth}px)`;
  });
}

setaButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

seta2Button.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);

function seta() {
    window.location.href = "../piramide.html";
}