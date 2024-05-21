// Filtrar todos os numeros pares
// Dobrar todos os numeros pares
// Somar o dobro de todos os numeros pares
const numeros = [
    [1,100,100,'neg'],
    [2,101,100,'neg'],
    [3,102,100,'neg'],
    [4,103,100,'neg'],
    [5,104,100,'pos'],
    [6,105,100,'neg'],
    [7,106,100,'neg'],
]


const numleg = numeros.map(x => {
    let chave = x[3]
    let txten = x[1]
    let txtpt = x[2]   
    
    return [chave,txten,txtpt]
})

//console.log(numleg)


const numlegreduce = numleg.reduce((x, y) => {
        return ([x[0] + y[1], x[1] + y[2]])
    },[0,0])

console.log(numlegreduce)

// const numerosPares = numeros.filter(x => {
//     return (x % 2 === 0)
// }).map(x => {
//     return x * 2}
// ).reduce((x, y) => {
//     return x + y
// })



// const numerosParesResumido = numeros
// .filter(x => x % 2 === 0)
// .map(x => x * 2)
// .reduce((x, y) => x + y)

// console.log(numerosPares, numerosParesResumido)





