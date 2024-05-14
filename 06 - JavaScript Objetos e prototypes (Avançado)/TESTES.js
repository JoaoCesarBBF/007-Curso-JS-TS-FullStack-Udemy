// Produto -> aumento, desconto
// Camiseta -> cor, caneca -> material

function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco); // Herda os atributos
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype) // Herda as funçoes
Caneca.prototype.constructor = Caneca; // Seta o Constructor
const caneca = new Caneca('Caneca de café', 40, 'Ceramica')

console.log(caneca)

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Herda os atributos
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype) // Herda as funçoes
Camiseta.prototype.constructor = Camiseta; // Seta o Constructor
// Sobrescrevre a função
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
// console.log(camiseta);