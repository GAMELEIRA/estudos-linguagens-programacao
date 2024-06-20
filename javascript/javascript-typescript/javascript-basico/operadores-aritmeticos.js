/**
 * ORDEM DE PRECEDENCIA
 * () TUDO QUE TIVER ENTRE PARENTES
 * `**`POTENCIACAO
 * `*` MULTIPLICATION
 * `/` `%` DIVISAO E RESTO DA DIVISAO 
 * `+` `-` SOMA E SUBTRACAO
 */

const num1 = 1; 
const num2 = 2;
const num3 = '3';

const adicao = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;
const multiplicacao = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
const pontenciacao  = (num1, num2) => num1 ** num2;
const concatenacao = (num1, num2) => num1 + num2;
const restoDaDivisao = (num1, num2) => num1 % num2;
const contador = (num) => num++;
const descontador = (num) => num--;
const contadorCustomizado = (num, cont) => num+=cont;


console.log(adicao(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(dividir(num1, num2));
console.log(pontenciacao(num1, num2));
console.log(concatenacao(num1, num3));
console.log(restoDaDivisao(num1, num2));
console.log(contador(num1));
console.log(contadorCustomizado(1, 3));


const num4 = '5.2';
const num5 = '6';

console.log(parseInt(num4) * num5);
console.log(parseFloat(num4) * num5);
console.log(Number(num4) * num5);