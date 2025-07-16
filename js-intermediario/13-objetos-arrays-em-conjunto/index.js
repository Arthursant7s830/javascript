// let jogo1 = {
//     nome: 'GTA V'
// }

// let jogo2 = {
//     nome: 'Batman'
// }
// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 = {
//     nome: 'Elden Ring'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame.jogos)

let cliente = {
    nome: 'Arthur',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {
                nome: 'Elden ring'
            }

        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0])