/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc = peso / (alturaEmM*alturaEmM)
let anoNascimento = 2024-30;

console.log(imc);
console.log(anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}`)

console.log(`${nome} nasceu em ${anoNascimento}.`)