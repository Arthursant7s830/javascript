let pessoas = [
    { nome: 'Arthur', idade: 20 },
    { nome: 'Júlia', idade: 20 },
    { nome: 'Mariana', idade: 19 },
]

/*let pessoasIdade20 = []
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade ===20){
        pessoasIdade20.push(pessoas[i])
    }
}
console.log(pessoasIdade20)*/

let pessoasIdade20 = pessoas.filter(function (pessoa) {
    return pessoa.idade === 20
})

console.log(pessoasIdade20)