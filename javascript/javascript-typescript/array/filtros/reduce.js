/**
 * REDUZIR O ARRAY A UM UNICO ELEMENTO.
 * NO REDUCE EH RECEBIDO COMO PARAMETRO OS VALORES,
 * (ACUMULADOR, VALOR ATUAL, INDICE, ARRAY ORIGINAL) 
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const total = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})

const pessoas = [
    { nome: 'Gabriel', idade: 80 },
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

const pessoaMaisVelha = pessoas.reduce((valorAcumulado, valorAtual) => {
    if (valorAcumulado.idade >= valorAtual.idade) return valorAcumulado;
    return valorAtual;
});

console.log(pessoaMaisVelha);

