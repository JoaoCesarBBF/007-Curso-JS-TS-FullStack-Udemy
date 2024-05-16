function rand (min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        if(typeof msg !== 'string') reject (new Error('BAD VALUE'))
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('UNO', rand(1,3)).then(resposta =>{
    console.log(resposta)
    return esperaAi('DOS', rand(1,3))
}).then(resposta => {
    console.log(resposta)
    return esperaAi('TRES', rand(1,3))
}).then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Msg Final')
}).catch(e => {
    console.log('ERRO:', e)
})

console.log('Isso será exibido antes dos promises')