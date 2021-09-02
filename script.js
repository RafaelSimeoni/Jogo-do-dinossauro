const fundoJogo = document.querySelector('.fundo-jogo')
const dino = document.querySelector('.dino')
let posicaoDino = 0
let estaPulando = false



//Evento de pulo
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        subirDino()
    }
})

function subirDino() {
    if (posicaoDino === 0) {
        estaPulando = true
        let tempoSubida = setInterval(() => {
            if (posicaoDino >= 150) {
                clearInterval(tempoSubida)
                descerDino()
            } else {
                posicaoDino += 20
                dino.style.bottom = posicaoDino + 'px'
            }
        }, 20)
    }
}

function descerDino() {
    let tempoDescida = setInterval(() => {
        if (posicaoDino <= 0) {
            clearInterval(tempoDescida)
            estaPulando = false
        } else {
            posicaoDino -= 20
            dino.style.bottom = posicaoDino + 'px'
        }
    }, 20)
}

function criarCactos() {
    const cacto = document.createElement('div')
    let posicaoCacto = 1000



    fundoJogo.appendChild(cacto)
    cacto.classList.add('cacto')
    cacto.style.left = 1000 + 'px'

    let movimentacaoCacto = setInterval(() => {
        if (posicaoCacto <= -60) {
            clearInterval(movimentacaoCacto)
            fundoJogo.removeChild(cacto)
        } else if (posicaoCacto > -35 && posicaoCacto < 60 && estaPulando === false) {
            clearTimeout(criarNovosCactos)
            clearInterval(movimentacaoCacto)
            fundoJogo.removeChild(cacto)
            document.body.innerHTML = "<h1 class='fim-de-jogo'>Fim de jogo!</h1>"
            console.log('gameover')
        } else {
            posicaoCacto -= 10
            cacto.style.left = posicaoCacto + 'px'
        }
    }, 20)

    let numeroAleatorio = Math.floor(Math.random() * (4000 - 500) + 500)
    let criarNovosCactos = setTimeout(criarCactos, numeroAleatorio)

}
criarCactos()

function gameover() {

}
