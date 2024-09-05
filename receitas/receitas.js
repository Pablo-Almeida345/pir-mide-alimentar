

let currentIndex = 0;

function esquerda() {
    const carousel = document.querySelector('.carousel-images');
    if (currentIndex > 0) {
        currentIndex--;
    }
    carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
}

function direita() {
    const carousel = document.querySelector('.carousel-images');
    const maxIndex = carousel.childElementCount - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
    }
    carousel.style.transform = `translateX(-${currentIndex * 220}px)`;
}


/*fuçoes de tranferencia de tela */
function home() {
  window.location.href = "../../index.html";
}

function coxinha_de_frango(){
  window.location.href = "../receitas/coxinha de frango/coxinha.html";
}


function macarron(){
  window.location.href = "macarons/macaron.html";
}

function lasanha(){
  window.location.href = "lasanha/lasanha.html";
}

function belem(){
  window.location.href = "pastelbelem/belem.html";
}

function macarrao(){
  window.location.href = "macarrao/macarrao.html";
}

