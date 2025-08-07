let pessoas = [
    { nome: 'Arthur', idade: 20 },
    { nome: 'Leticia', idade: 25 },
    { nome: 'Fulano', idade: 20 }
]

// let pessoasComIdade20Anos = []
// for (let i = 0; i < pessoas.length; i++) {
//     if (pessoas[i].idade === 20) {
//         pessoasComIdade20Anos.push(pessoas[i])
//     }
// }
// console.log(pessoasComIdade20Anos)

let pessoasComIdade20Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 20
})

console.log(pessoasComIdade20Anos)