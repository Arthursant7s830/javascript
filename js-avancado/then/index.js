let ferverAgua = () => {
    chaleiraEstaNoFogao, fogaoLigado
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoLigado) {
            console.log('Começando o processo de fervura')
            resolve()
        } else {
            console.log('É necessário ligar o fogão e colocar a cchaleira para ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoLigado = true;

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstaNoFogao, fogaoLigado).then(passarCafe)
console.log('fazendo café')