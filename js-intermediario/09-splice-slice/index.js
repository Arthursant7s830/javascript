let frutas = ['banana', 'maçã', 'uva', 'laranja']

// let frutasExtraidas = frutas.slice(3)

// console.log(frutasExtraidas)

// let frutasExtraidas = frutas.splice(1, 2)
// console.log(frutasExtraidas)
// console.log(frutas)

let removeAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'pêra')
console.log(frutas)
console.log(removeAdicionaFrutas)
