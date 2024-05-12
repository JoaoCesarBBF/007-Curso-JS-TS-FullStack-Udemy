const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320,
    }
}

//console.log(pessoa)

// Exemplo com variavel de mesmo nome
// const { endereco: { rua, numero }, endereco, nome } = pessoa;
// console.log(endereco,rua,numero,nome)


// Exemplo com variavel com nome diferente
// const { endereco: { rua: r, numero: num }, endereco:e, nome:n } = pessoa;
// console.log(e,r,num,n)

// Exemplo com variavel para atribuição do RESTO
const { nome, ...resto } = pessoa;
console.log(`Mostrando o nome: ${nome}`)
console.log('Mostrando o resto:', resto )