function rand (min=0, max=2) {
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
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo)
    })
}

// // Codigo sem Async Await
// esperaAi('Fase1', rand())
// .then(valor=>{
//     console.log(valor)
//     return esperaAi('Fase2',rand())
// })
// .then(fase=>{
//     console.log(fase)
//     return esperaAi('Fase3',rand())
// })
// .then (fase=>{
//     console.log(fase)
//     return fase
// })
// .then (fase=> {
//     console.log('FINISH')
// })
// .catch(e=>console.log(e))

// Codigo com Async Await
async function executa(){
    try{
        // Fase 1 sem o Await para teste
        const fase1 = esperaAi('Fase1', 1000)
        console.log(fase1)

        // Timeout para pegar o valor de fase1 que estava pending
        setTimeout(()=>{
            console.log('Essa promise estava pendente', fase1)
        },1100)

        const fase2 = await esperaAi('Fase2', rand())
        console.log(fase2)
        
        const fase3 = await esperaAi('Fase3', rand())
        console.log(fase3)

        console.log('FINISH')
    } catch (e) {
        console.log(e)
    }
}

executa()

// 3 estados das promises: Pending, Fullfilled, Rejected