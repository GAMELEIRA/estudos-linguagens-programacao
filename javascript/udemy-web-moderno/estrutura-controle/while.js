//UTILIZADO PARA REPETIR DE FORMA INDERTEMINADAS DE VEZES

const buscaInteiroAleatorio = (min, max) => {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = buscaInteiroAleatorio(-1, 10);
    console.log(opcao);
}

