// FOR IN usado quando voce precisa do NUMERO do Indice
// FOR OF usado quando voce precisa do VALOR do Indice

// #################################################

// // Exemplo de FOR IN
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
//     idade: '30'
// };

// for (let chave in pessoa) {
//     console.log(`${chave} ${pessoa[chave]}`);
// }


// *** RESULTADO ***
// Info: Start process (9:53:53 AM)
// nome Luiz
// sobrenome Otávio
// idade 30
// Info: End process (9:53:53 AM)


// #################################################

// // Exemplo de FOR OF
// const nome = 'Luiz Otávio';
// for (let valor of nome) {
//     console.log(valor)
// }

// *** RESULTADO ***
// Info: Start process (9:52:55 AM)
// L
// u
// i
// z
 
// O
// t
// á
// v
// i
// o
// Info: End process (9:52:55 AM)


// #################################################

// const nome = ['Luiz', 'Otávio', 'Henrique'];
// for (let valor of nome) {
//     console.log(valor)
// }


// *** RESULTADO ***
// Info: Start process (9:55:55 AM)
// Luiz
// Otávio
// Henrique
// Info: End process (9:55:56 AM)


// #################################################

// nome.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// })


// #################################################

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: '30'
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}