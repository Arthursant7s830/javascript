let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resposta = document.querySelector('div#resposta')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)


    } else {
        alert("Valor inválido ou já selecionado.")
    }

    //limpa o input e coloca o cursor de volta nele
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let total = valores.length

        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todos temos ${total} números cadastrados.</p>`
    }
}


