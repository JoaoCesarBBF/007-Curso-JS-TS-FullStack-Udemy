const data = new Date;
const diaSem = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
const mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']





//Segunda-Ferira, 7 de outubro de 2019, 22:52
console.log(data)
console.log(`${diaSem[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}, são ${data.getHours()}:${data.getMinutes()}`)