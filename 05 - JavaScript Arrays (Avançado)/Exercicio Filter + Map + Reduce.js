// Filtrar todos os numeros pares
// Dobrar todos os numeros pares
// Somar o dobro de todos os numeros pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7,11, 15, 22, 27]


console.log('asdasd')
numeros2 = numeros.map(x=> x*2).map(console.log)



console.log(numeros2)

const leg = numeros.reduce(function (acu,x,y,z){
    return acu>x
})
 console.log(leg)


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





