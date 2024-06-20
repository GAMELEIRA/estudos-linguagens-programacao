// const nomes = ['Eduardo', 'Maria', 'Joana'];
const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Cibele', 'Gabriel');
nomes[2] = 'João'; //ALTERA O VALOR DO ARRAY
delete nomes[1]; //REMOVE O VALOR DO ARRAY BASEADO NO INDICE
console.log(nomes);

nomes.unshift('Oi'); //ADICIONA VALOR NO COMECO DO ARRAY
nomes.shift(); //REMOVE O PRIMEIRO VALOR DO ARRAY
nomes.push('Mozaum'); //ADICIONA VALORES NO FINAL DO ARRAY
nomes.pop(); //REMOVE O ULTIMO VALOR DO ARRAY
nomes.slice(1, -1); //RETORNA A FATIA O ARRAY BASEADO NO VALOR PASSADO NO PARAMETROS O MENOS 1 FAZ REFERENCIA AO ULTIMO VALOR DO ARRAY
nomes.join();  //TRANSFORMA VALORES DE UM ARRAY DE STRINGS E UMA UNICA STRING. O VALOR DA FUNCAO PASSADO COMO PARAMETRO SERA O VALOR ENTRE OS VALORES DO ARRAY

console.log(nomes.join(', '));
const res = nomes.join(', ');

console.log(typeof res);
