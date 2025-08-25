// setTimeout(() => {
//     alert('Olá')
// }, 1000);

// setInterval(() => {
//    console.log('Executando a cada 2 segundos')
// }, 2000);

// console.log("oiii")

let idIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);

console.log(idIntervalo)
clearInterval(idIntervalo)