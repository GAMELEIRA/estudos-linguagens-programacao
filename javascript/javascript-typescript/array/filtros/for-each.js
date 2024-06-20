const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let valor of numeros) {
    console.log(valor);
}

numeros.forEach((valor, indice, array) => {
    console.log(valor);
})