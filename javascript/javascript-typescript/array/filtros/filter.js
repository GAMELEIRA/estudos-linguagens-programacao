
/**
 * O METODO FILTER RETORNA UM ARRAY
 * BASEADO NA CONDIÇÃO PASSADA NA FUNCAO CALLBACK
 * NA FUNCAO CALLBACK EH PASSADO COMO PARAMETRO OS VALORES (VALOR ATUAL DO ARRAY, INDICE ATUAL DO ARRAY, ARRAY COMPLETO)  
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numerosFiltrados = numeros.filter((num, indice, arrayCompleto) => num > 10);
console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Gabriel', idade: 23 },
    { nome: 'Cibele', idade: 19 },
    { nome: 'Pedro', idade: 18 },
    { nome: 'Francisco', idade: 16 },
    { nome: 'Rafael', idade: 15 },
    { nome: 'Melissa', idade: 13 },
    { nome: 'Maria', idade: 12 },
    { nome: 'José', idade: 11 },
    { nome: 'Juan', idade: 10 },
    { nome: 'Antoine', idade: 59 },
    { nome: 'Eduardo', idade: 27 }
];

const pessoasCom5LetrasOuMais = pessoas.filter((valor) => valor.nome.length >= 5);
console.log(pessoasCom5LetrasOuMais);
const pessoasComMais50Anos = pessoas.filter((valor) => valor.idade > 50);
console.log(pessoasComMais50Anos);
// const pessoasQueTerminaComLetraA = pessoas.filter((valor) => valor.nome.charAt(valor.nome.length - 1) === 'a');
const pessoasQueTerminaComLetraA = pessoas.filter((valor) => valor.nome.toLocaleLowerCase().endsWith('a'));
console.log(pessoasQueTerminaComLetraA);
