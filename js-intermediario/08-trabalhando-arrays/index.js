let frutas = ['manga', 'banana', 'laranja', 'uva']
let frutasTamanho = frutas.length

// for (let i = 0; i < frutasTamanho; i++) {
//      console.log('Fruta: ' +frutas[i])
// }

frutas.forEach(function(item, indice, array) {
      console.log('Fruta: ' +item)
}
)
