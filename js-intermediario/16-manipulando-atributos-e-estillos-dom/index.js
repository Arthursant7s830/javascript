function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');
    let primeiroPost = posts[0];

    primeiroPost.style.backgroundColor = 'lightblue'

}

function aumentarFonteSegundoPost() {
    let textPost = document.getElementsByClassName('texto-post')

    textPost[1].classList.add('fonte-grande')
}
 
function marcarRadio() {
    let radioMasculino =  document.getElementById('masculino')

     let radioFeminino =  document.getElementById('feminino')

     if(genero === 'M') {
        radioMasculino.checked = true; 
     }
}