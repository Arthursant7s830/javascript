// setTimeout(() => {
//     alert('Olá. mundo!')
// }, 3000);

// setInterval(() => {
//     console.log('Hellor, world!')
// }, 4000);

// setTimeout(() => {
//     console.log('Hellor, world!')
// }, 4000);

// console.log('console depois do setTimeout')


const idIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos')
        
}, 2000); 

console.log(idIntervalo)
clearInterval(idIntervalo)