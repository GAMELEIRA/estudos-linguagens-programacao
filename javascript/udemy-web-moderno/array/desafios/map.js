const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

//RETORNAR ARRAY APENAS COM OS PRECOS   
let arrayPrecos = carrinho.map((item) => {
    const itemFormato = JSON.parse(item);
    console.log(itemFormato);
    return itemFormato.preco;
});

console.log(arrayPrecos);