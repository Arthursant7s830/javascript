/*
    function nomeDaFuncao(){
        <bloco de execuão>
    
    }
    nomeDaFuncao()
*/

/*
    function nomeDaFuncao(parametro1, parametro2){
        <bloco de execuão>
    
    }
    nomeDaFuncao(parametro1, parametro2)
*/

function incentivarQuester(nomeQuester) {
    alert('Muito bem, '+nomeQuester+ '! Você chegou ao JS, continue assim!')
}
incentivarQuester('Arthur')

function soma(numero1, numero2) {
    return numero1 + numero2
}
soma(1, 3)

let resultadoSoma = soma(1, 3)
console.log('O resultado da soma é: ' + resultadoSoma) //4

resultadoSoma = soma(resultadoSoma, 10)
console.log('O resultado da soma é: ' + resultadoSoma) //14