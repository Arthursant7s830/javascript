let pessoas = [
    { nome: 'Arthur', idade: 20 },
    { nome: 'Júlia', idade: 20 },
    { nome: 'Mariana', idade: 19 },
]

/*let nomePessoas = []
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade ===20){
        nomePessoas.push(pessoas[i].nome)
    }
}
console.log(nomePessoas)*/

let nomePessoas = pessoas.map((pessoa) =>  pessoa.nome + ' tem ' + pessoa.idade + ' anos.'
)

console.log(nomePessoas)