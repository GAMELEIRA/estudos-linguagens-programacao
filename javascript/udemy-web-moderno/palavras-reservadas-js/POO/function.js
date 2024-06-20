class People {
    nome
};

//PARTE DA ASSINATURA DE UM METODO PARA DECLARAÇÃO DO MESMO
function createPeople () {
    return new People(); 
};

console.log(createPeople());