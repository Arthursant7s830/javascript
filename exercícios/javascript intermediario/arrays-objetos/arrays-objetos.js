/*let jogo1  ={
nome: 'Fifa', 
}

let jogo2 = {
    nome: 'Fallout', 
    }

let videoGame = {
    nome: 'xbox',
    valor: 3000, 
    jogos:[jogo1, jogo2]
} 
let jogo3 = {
    nome:'Mortal Kombat'
}

videoGame.jogos.push(jogo2)
console.log(videoGame)*/

let cliente = {
    nome: 'Arthur',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Fifa' }

        ]
    }
}
console.log(cliente.ultimoPedido.jogos[0])