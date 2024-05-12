function relogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    function criaHoraDosSegundos (segundos) {
        const data = new Date(segundos*1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    let s = 0
    let timer;


    function ligaRelogio() {
        timer = setInterval(() => {
            s++;
            relogio.innerHTML = criaHoraDosSegundos(s)
        }, 500);
    }


    document.addEventListener('click', function(e){
        const el = e.target

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            ligaRelogio()
        }

        if (el.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer)
        }

        if (el.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            s = 0
        }

    })

    // iniciar.addEventListener('click', function(event){
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer)
    //     ligaRelogio()
    // })

    // pausar.addEventListener('click', function(event){
    //     relogio.classList.add('pausado')
    //     clearInterval(timer)
    // })

    // zerar.addEventListener('click', function(event){
    //     relogio.classList.remove('pausado')
    //     clearInterval(timer)
    //     relogio.innerHTML = '00:00:00'
    //     s = 0
    // })

}
relogio()