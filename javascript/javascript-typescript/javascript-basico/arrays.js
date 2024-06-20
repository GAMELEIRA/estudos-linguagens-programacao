const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos instanceof Array);

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

console.log(alunos.length); //TAMANHO DO ARRAY
alunos.push('Gabriel'); //ADICIONA NO FINAL DA FILA
console.log(alunos);

alunos.unshift('Cibele'); //ADICIONA NO COMECO DA FILA
console.log(alunos);
alunos.pop(); //REMOVE DO FINAL
alunos.shift(); //REMOVE DO COMECO
console.log(alunos);
delete alunos[1]; //DELETA VALOR DA POSICAO PASSADA PELO PARAMETRO

alunos.slice(0, 3); //FATIA UM PEDACO DO ARRAY COM BASE NA POSICAO INICIAL E POSICAO FINAL QUE ANTECEDE O VALOR PASSADO COMO PARAMETRO.  
alunos.slice(0. -2); //FATIA AS ULTIMAS POSICOES DO ARRAY