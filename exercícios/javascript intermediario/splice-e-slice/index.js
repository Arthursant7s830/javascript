let frutas = ['banana', 'maçã', 'laranja', 'uva']

/*
let frutasExtraidas = frutas.slice(1, 3)
console.log(frutasExtraidas)

console.log(frutas)*/  //>slice<



let frutasExtraidas = frutas.splice(1, 2 )
console.log(frutasExtraidas)
console.log(frutas)

let removeAdiciona = frutas.splice(1,2, 'Goiaba', 'abacaxi' , 'pêra')
console.log(frutas)