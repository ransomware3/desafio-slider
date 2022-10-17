const btnVoltar = document.getElementById('seta-voltar')
const btnAvancar = document.getElementById('seta-avancar')
const secoes = document.querySelectorAll('.image')
let secaoAtual = 0

function esconderSecaoSelecionada(){
    const sessaoSelecionada = document.querySelector('.selected')
    sessaoSelecionada.classList.remove('selected')
}

function mostrarSecao(indiceSecao){
    secoes[indiceSecao].classList.add('selected')
}

btnVoltar.addEventListener('click', function(){
    if(secaoAtual === 0) return

    esconderSecaoSelecionada()

    secaoAtual--
    mostrarSecao(secaoAtual)
})

btnAvancar.addEventListener('click', function(){
    if(secaoAtual === secoes.length - 1) return

    esconderSecaoSelecionada()

    secaoAtual++
    mostrarSecao(secaoAtual)
})