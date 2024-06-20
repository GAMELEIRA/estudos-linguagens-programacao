/**
 * O METODO MAP RETORNA UM ARRAY COM OS VALORES ALTERADOS A FUNCAO MAP
 * ALTERA O VALOR REAL DO ARRAY
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numerosDobrados = numeros.map((valor, indice, array) => valor * 2);
console.log(numerosDobrados);

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

console.log(pessoas);

const idadeRemovidos = pessoas.map((valor, indice, array) => {
    return valor.idade;
});

console.log(idadeRemovidos);

const nomeRemovidos = pessoas.map((valor, indice, array) => {
    return valor.nome;
});

console.log(nomeRemovidos);

const pessoasComId = pessoas.map((valor, indice) => {
    valor.id = indice + 1;
    return valor;
});
console.log(pessoasComId);