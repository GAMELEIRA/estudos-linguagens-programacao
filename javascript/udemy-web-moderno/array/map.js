// FUNCAO MAP
// TRANSFORMA UM ARRAY EM OUTRO ARRAY COM A MESMA QUANTIDADE DE ELEMENTOS PORÉM COM OS DADOS MODIFICADOS

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = nums.map((valor, indice, arrayCompleto) => {
    return valor * 2;
});

console.log(res); 