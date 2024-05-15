// let x = 'pato'
// var y = 'gato'
// const v = true
// if(v){    
//     let x = 'pato2'
//     var y = 'gato2'
//     console.log(x)
//     console.log(y)
//     if (v){
//         let x = 'pato3'
//         var y = 'gato3'
//         console.log(x)
//         console.log(y)
//     }
// }
// console.log(x)
// console.log(y)

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
};
conta('+',2,3,4,5)


