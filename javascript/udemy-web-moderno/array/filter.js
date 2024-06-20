//METODO FILTER
//RETORNA UM NOVO ARRAY COM QUANTIDADE MENOR OU IGUAL AO ARRAY ORIGINAL BASEADO EM UMA CONDIÇÃO PARA FILTRAR OS ELEMENTOS
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


const res = produtos.filter((valor) => valor.preco > 1000);

console.log(res);