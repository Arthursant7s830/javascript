let ferverAgua = (chaleiraEstaNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoLigado) {
            console.log('Passo 1 finalizado: Água fervida')
            resolve(true)
        } else {
            console.log('É necessário colocar água na chaleira e ligar o fogão')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: café foi tomado')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo  finalizado: xícara lavada')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoLigado = true

// ferverAgua(chaleiraEstaNoFogao, fogaoLigado)
// .then(() => {
//     return passarCafe();
// })
// .then(() => {
//     return tomarCafe();
// })
// .then(() => {
//     return lavarXicara();
// })
// .then(() => {
//     console.log('Finalizado o processo do café')
// })

async function iniciarProcessoPassarcafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (lavarXicara) console.log('Finalizado o processo de tomar o café.')
}

iniciarProcessoPassarcafe()