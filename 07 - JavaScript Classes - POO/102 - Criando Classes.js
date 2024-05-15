class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }
    comer(){
        console.log(`${this.nome} está comendo.`)
    }
    beber(){
        console.log(`${this.nome} está bebendo.`)
    }

}


// Comparando com o outro metodo de criaçao 
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}
Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está comendo.`)
}
Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está bebendo.`)
}






const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Pato', 'Donald');
const p3 = new Pessoa2('Maria', 'Midozi');
const p4 = new Pessoa2('Werner', 'Ziegler');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
p1.falar()
p2.falar()
p3.falar()
p4.falar()