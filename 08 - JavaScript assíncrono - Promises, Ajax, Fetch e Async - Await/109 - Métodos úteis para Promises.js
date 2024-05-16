function rand (min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject ('Caí no ERRO')
                return
            }
            resolve(msg.toUpperCase() + '- Passei na promise')
            return
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject
/*
    Promise.all - Executa todas as promises ao mesmo tempo retornando todas no tempo da mais longa.

    Promise.race - Executa todas as promises ao mesmo tempo retorando a primeira apenas.

    Promise.resolve - Retorna uma promise resolved.

    Promise.reject - Retorna uma promise rejected.


*/
const promises = [
    //'Primeiro Valor',
    esperaAi('Promise 1', 2222),
    esperaAi('Promise 2', 200),
    esperaAi('Promise 3', 222),
    //esperaAi(2222, 111),
    //'Outro Valor'
]

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor)
// }) 
// .catch(function(erro){
//     console.log(erro)
// })


function baixaPagina() {
    const emCache = true

    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página',2000)
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina)
})
.catch(e => console.log('ERRO:', e))