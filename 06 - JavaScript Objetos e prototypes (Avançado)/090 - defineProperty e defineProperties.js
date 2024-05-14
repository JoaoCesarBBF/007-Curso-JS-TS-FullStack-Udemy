// defineProperty - defineProperties
function Produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        //value: estoque,
        //writable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('Estoque aceita apenas Números')
                return;
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('Uva', 'Laranja')
            nome = valor;
        }
    }
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Sorvete de Uva'
console.log(p2.nome)


const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 77
console.log(p1)
