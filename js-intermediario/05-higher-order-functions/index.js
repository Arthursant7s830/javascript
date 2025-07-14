// const calcularAnoNascimento = function (idade, mesNascimento, imprimir) {
//     const mesAtual = 7
//     let anoNascimento = 2025 - idade
//     if (mesNascimento > mesAtual) anoNascimento --
//     imprimir (anoNascimento)
// }

// let imprimirAnoNascimento = anoNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoNascimento)
// }

// calcularAnoNascimento (20, 9, imprimirAnoNascimento)

function multiplicar (multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(4), triplicar(8), quadriplicar(2))