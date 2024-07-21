const botaoabrir = document.querySelector("header > button")
const botaofechar = document.querySelector("header button")

const body = document.querySelector("body")
const nav = document.querySelector("header")

botaoabrir.addEventListener('click', abrirMenu)
botaofechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("tela-escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("tela-escurecer")
    nav.classList.remove("abrir")
}