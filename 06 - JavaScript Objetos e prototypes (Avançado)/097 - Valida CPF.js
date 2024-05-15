// 705.484.450-52 070.987.720-03
/*
7   0   5   4   8   4   4   5   0
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (primeiro digito)
se for maior que 9, digito = 0

7   0   5   4   8   4   4   5   0   5
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284

11 - (284 % 11) = 2 (segundo digito)
se for maior que 9, digito = 0
*/

let cpf = '705.484.450-52';
let cpf2 = '070.987.720-03';
let cpf3 = '36898950819'
let cpfLimpo = cpf3.replace(/\D+/g,'')
cpfArray = Array.from(cpfLimpo);

let i=10




let soma1 = (cpfArray.filter((valor,indice) =>{
    if (indice >= 9) return;
    return valor
}).map(x =>{
    return x*i--
})).reduce((ac,val) => ac + Number(val),0)






if (((11 - (soma1 % 11))>9?0:(11 - (soma1 % 11))) === Number(cpfLimpo[9])) console.log(`Primeiro dígito validado: ${cpfLimpo[9]}`);

i=11
let soma2 = (cpfArray.filter((valor,indice) =>{
    if (indice >= 10) return;
    return valor
}).map(x =>{
    return x*i--
})).reduce((ac,val) => ac + Number(val),0)

if (((11 - (soma2 % 11))>9?0:(11 - (soma2 % 11))) === Number(cpfLimpo[10])) console.log(`Segundo dígito validado: ${cpfLimpo[10]}`);
    
console.log(cpfLimpo[9])
console.log(soma1)
console.log(cpfArray)



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7,11, 15, 22, 27]
const numerosPares = numeros.filter(x => {
    return (x % 2 === 0)
}).map(x => {
    return x * 2}
).reduce((x, y) => {
    return x + y
})
const numerosParesResumido = numeros
.filter(x => x % 2 === 0)
.map(x => x * 2)
.reduce((x, y) => x + y)
console.log(numerosPares, numerosParesResumido)
