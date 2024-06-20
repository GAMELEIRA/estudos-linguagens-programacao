const numbers = [1, 2, 3, 4];

console.log(...numbers); //ESPALHA OS VALORES DO ARRAY

//JUNTA OS VALORES DO ARRAY
function olaPessoas(...pessoas) {
    console.log(pessoas);
}

olaPessoas('Gabriel', 'Cibele');