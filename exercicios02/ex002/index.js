let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resposta = document.querySelector('div#resposta')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
}  else {
    return false
}
 }

function inLista(n, l) {
    if (L.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        
    } else {
        alert("Valor inválido ou já selecionado.")
    }
}