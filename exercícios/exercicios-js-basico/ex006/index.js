function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horaAtual = data.getHours()
    msg.innerHTML = `Agora são ${horaAtual} horas.`

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = 'imagens-js/manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (horaAtual >= 12 && horaAtual <= 18) {
        img.src = 'imagens-js/tarde.png'
        document.body.style.background = '#b9846f'

    } else {
        img.src = 'imagens-js/noite.png'
        document.body.style.background = '#515154'
    }
}
