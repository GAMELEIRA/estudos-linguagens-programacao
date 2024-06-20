const notas = [6, 7, 8, 9, 10];

for (i in notas) {
    console.log(notas[i]); 
}

const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Silva', 
    idade: 29, 
    peso: 64
}

for (atributo in pessoa) {
    console.log(pessoa[atributo]);
}