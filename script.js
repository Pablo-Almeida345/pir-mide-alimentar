const BotaoAbrir = document.querySelector("header>guia")
const body = document.querySelector("body")
const nav = document.querySelector("header .nv1")

BotaoAbrir.addEventListener('click', abrirMenu )

function abrirMenu() {
    body.classList.add("escurecer")
}

function piramide() {
    window.location.href = "./2piramide/piramide.html";
}

planejamento.addEventListener('click', () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScIwhAJgX330aeNJ3HpVC5sYQgKR8aS2ktE1IOHyYi2vq2Qyg/viewform?embedded=true';
});

function quiz() {
    window.location.href = "quiz/quiz.html";
}

function receita() {
    window.location.href = "receitas/receitas.html";
}
