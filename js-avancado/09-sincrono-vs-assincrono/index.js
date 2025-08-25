function colocarAguaPraFerver () {
    console.log('Colocar água pra ferver')

    setTimeout(() => {
        console.log('Água ferveu')
        passarCafe()
    }, 5000);
}

function prepararPraPassarCafe() {
    console.log('pegar o pó de café')
    console.log('Pegar o filtro de café')
    console.log('Colocar o café no filtro')
    console.log('Colocar o filtro em cima da xícara') 
}

function passarCafe () {
    console.log('Passando o café')
}

colocarAguaPraFerver()
prepararPraPassarCafe()


