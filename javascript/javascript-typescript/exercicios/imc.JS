const nomeCompleto = 'Gabriel Gameleira';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNascimento;

imc = (peso / Math.pow(altura, 2)).toFixed(2);

console.log(`${nomeCompleto} tem ${idade} anos pesa ${peso} kg e sua altura é de ${altura} seu imc é ${imc}`);