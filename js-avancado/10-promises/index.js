/* PENDENTE
   REALIZADA resolve
   RECUSADA reject
   ESTABELECIDA
   */

//    new Promise((resolve, reject) => {

//    })


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

ferverAgua(chaleiraEstaNoFogao, fogaoLigado)
console.log('Fazendo café')