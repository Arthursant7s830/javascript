let ordens = [
    { Cliente: 'Arthur', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    { Cliente: 'Leticia', tipo: 'compra', quantidade: 21, ativo: 'AAPL34'},
    { Cliente: 'Fulano', tipo: 'venda', quantidade: 76, ativo: 'GOGL34'}
]

// let quantidadeDeOrdens = 0
// for(let i = 0; i < ordens.length; i++) {
//     quantidadeDeOrdens += ordens[i].quantidade
// }

let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem){
    return somaOrdens + ordem.quantidade
}, 0)

console.log(quantidadeDeOrdens)