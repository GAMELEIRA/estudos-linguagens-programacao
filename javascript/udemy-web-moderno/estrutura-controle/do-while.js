//UTILIZADO PARA REPETIR DE FORMA INDERTEMINADAS DE VEZES GARANTINDO QUE SEJA REPETIDO PELO MENOS UMA VEZ

const buscaInteiroAleatorio = (min, max) => {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao;

do {
    opcao = buscaInteiroAleatorio(-1, 10);
    console.log(opcao);
} while (opcao != -1);

