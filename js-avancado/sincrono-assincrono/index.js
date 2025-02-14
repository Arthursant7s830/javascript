function colocarAguaFerver(){
    console.log('Colocar água pra ferver')
    
    setTimeout(()=>{
        console.log('água ferveu*')
        passarCafe()
    }, 5000);
}
function prepararPassarCafe(){
    console.log('Pegar o pó do café')
    console.log('Pegar o filtro de café')
    console.log('Colocar o café no filtro')
    console.log('Colocar o filtro em cima da xícara')
}
function passarCafe(){
    console.log('Passando o café')
}

colocarAguaFerver()
prepararPassarCafe()
