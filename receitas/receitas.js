const receitas = document.querySelectorAll('.receita');
const esquerdaBtn = document.querySelector('.seta2');
const direitatBtnBtn = document.querySelector('.seta1');

let currentSlide = 0;

const showSlide = (n) => {
    receitas.forEach((receita, index) => {
        receita.style.transform = `translateX(${100 * (index - n)}%)`;
    });
};

esquerdaBtn.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

direitatBtnBtn.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);   

});


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

