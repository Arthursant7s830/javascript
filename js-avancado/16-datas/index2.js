const dataAtual = new Date();
// const umDiaDepois = new Date(dataAtual);

// umDiaDepois.setDate(dataAtual.getDate() +1);
// console.log(umDiaDepois);

// const umMesAtras = new Date(dataAtual);

// umMesAtras.setMonth(dataAtual.getMonth() -1);
// console.log(umMesAtras);

// const opcoes = {
//     year: 'numeric',
//     month:'long',
//     day: 'numeric'
// }

// const dataFormatadada = dataAtual.toLocaleString('pt-BR', opcoes)
// console.log(dataFormatadada)

const opcoes = {
    weekday:'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'};

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);

const dataFormatadada = formatador.format(dataAtual);
console.log(dataFormatadada)