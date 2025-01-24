let frutas = ['Banana', 'maçã', 'laranja', 'pêra']




//let frutasTamanho = frutas.length
/*for(let i = 0; i < frutasTamanho; i++){
console.log('Fruta: '+frutas[i])
}*/


/*frutas.forEach(function (item, indice, array) {
    console.log('Fruta: ' +item)
    //console.log('Fruta: ' + frutas[indice])
}
) */
frutas.shift()
frutas.unshift('Uva')
frutas.pop()
frutas.push('Mamão')
 let posicao = frutas.indexOf('Maçã')
console.log(posicao)
console.log(frutas)