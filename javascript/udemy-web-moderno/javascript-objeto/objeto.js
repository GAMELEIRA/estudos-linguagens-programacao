const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);

//EXCLUI O ATRIBUTO NAO O VALOR
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 9000, 
    proprietario: {
        nome: 'Raul', 
        idade: 56, 
        endereco: {
            logradouto: 'Rua ABC', 
            numero: 1234
        }
    }, 
    condutores: [
        {
            nome: 'Junior', 
            idade: 19
        }, {
            nome: 'Ana', 
            idade: 42
        }
    ],
    calcularValorSegued: function() {

    },
    fidelidade() {

    }
}

carro.proprietario.endereco.numero = 1000;
