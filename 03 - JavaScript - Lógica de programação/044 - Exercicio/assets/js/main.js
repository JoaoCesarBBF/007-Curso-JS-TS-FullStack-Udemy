// Capturar evento de Submit do Formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.')
    setResultado('Olá Mundo!')
})

function criaP (className) {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')

}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    resultado.appendChild(p)
}