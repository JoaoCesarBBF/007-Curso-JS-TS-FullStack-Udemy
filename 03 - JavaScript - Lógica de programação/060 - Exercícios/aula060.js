// Escreva uma função que receba 2 números e retorne o maior deles

function maiorNumero(num1,num2) {
    if (num1 >= num2) {
        return num1
    } else {
        return num2
    }
}

function maiorNumeroV2(x,y) { return x > y ? x : y;}

const maiorNumeroV3 = (x,y) => x > y ? x : y

console.log(maiorNumero(5,5))
console.log(maiorNumeroV2(4,4))
console.log(maiorNumeroV3(5,5))