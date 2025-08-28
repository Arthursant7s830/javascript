let ferverAgua = (chaleiraEstaNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoLigado) {
            console.log('Começando a ferver a água')
            resolve()
        } else{
            console.log('É necessário ligar o fogão')
            reject()
        }
    })
}
let chaleiraEstaNoFogao = true
let fogaoLigado = true

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstaNoFogao, fogaoLigado).then(passarCafe)
console.log('Fazendo café')
