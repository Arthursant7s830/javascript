let pessoas = [
    { nome: 'Arthur', idade: 20 },
    { nome: 'Leticia', idade: 25 },
    { nome: 'Fulano', idade: 20 }
]

// let nomeDasPessoas = []
// for(let i = 0; i < pessoas.length; i++) {
//     nomes.push(pessoas[i].nome)
// }

// console.log(nomeDasPessoas)

let nomeDasPessoas = pessoas.map(function(pessoa) {
    return pessoa.nome + " tem " +pessoa.idade + " anos"
})

console.log(nomeDasPessoas[1])