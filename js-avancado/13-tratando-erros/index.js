let ferverAgua = (chaleiraEstaNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

        if (chaleiraEstaNoFogao && fogaoLigado) {
            console.log('Passo 1 finalizado: Água fervida')
            resolve(true)
        } else {
            const mensagemErro = 'É necessário colocar água na chaleira e ligar o fogão'
            reject(mensagemErro)
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


async function iniciarProcessoPassarcafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

        throw "Mensagem de erro"
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Finalizado o processo de tomar o café.')
    }
}

iniciarProcessoPassarcafe() 