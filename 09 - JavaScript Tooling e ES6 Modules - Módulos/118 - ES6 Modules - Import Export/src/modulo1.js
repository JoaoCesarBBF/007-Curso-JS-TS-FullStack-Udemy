const nome = 'Luiz'
const sobrenome = 'Miranda'
const idade = 30

function soma (x, y) {
    return x+y
}

// export class Pessoa {
//     constructor(nome, sobrenome, idade){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.idade = idade
//     }
// }

export default (x, y) => x * y

export {nome, sobrenome, idade, soma}

//export { nome as nome2, sobrenome, idade, soma}
//export { nome as default, sobrenome,idade,soma}