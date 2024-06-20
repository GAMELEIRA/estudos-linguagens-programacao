const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaNumerosPares = numeros
    .filter((valor) => valor % 2 === 0)
    .map((valor) => valor * 2)
    .reduce((acc, valor) => acc + valor, 0);

console.log(somaNumerosPares);