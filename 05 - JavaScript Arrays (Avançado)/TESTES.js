// Filtrar todos os numeros pares
// Dobrar todos os numeros pares
// Somar o dobro de todos os numeros pares
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





