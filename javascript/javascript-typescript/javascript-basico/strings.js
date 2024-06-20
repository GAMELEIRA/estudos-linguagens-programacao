let umaString = 'Um texto';

console.log(umaString[4]); //BUSCA VALOR ESPECIFICO DE UM STRING
console.log(umaString.charAt(4)); //BUSCA VALOR ESPECIFICO DE UM STRING
console.log(umaString.concat(' ', 'Oi')); // CONCATENA STRINGS
console.log(umaString.indexOf('um')); //RETORNA O VALOR DO INDICE DE UMA STRING
console.log(umaString.lastIndexOf('o')); //RETORNA O VALOR DO INDICE DE UMA STRING DE TRAS PRA FRENTE
console.log(umaString.match(/[a-z]/g)); //RETORNA UM ARRAY COM OS VALORES ENCONTRADOS BASEADOS NA EXPRESSÃO REGULAR
console.log(umaString.search(/[a-z]/g)); //RETORNA O INDICE DO VALOR ENCONTRADO BASEADO NA EXPRESSÃO REGULAR
console.log(umaString.replace('Um', 'Receita de Bolo')); //SUBSTITUI UM VALOR ENCONTRADO BASEADO NA EXPRESSÃO REGULAR OU PASSADO NO PARAMETRO
console.log(umaString.length); //RETORNA O TAMANHO DA STRING
console.log(umaString.slice(0, 1)); //RETORNA UM PEDACO DA STRING BASEADO NOS VALORES PASSADOS NO PARAMETRO DAS FUNCOES
console.log(umaString.substring(0, 1)); //RETORNA UM PEDACO DA STRING BASEADO NOS VALORES PASSADOS NO PARAMETRO DAS FUNCOES
console.log(umaString.split('')); //RETORNA UM ARRAY BASEADO NO VALOR QUE SERA UTILIZADADO COMO SEPARADOR
console.log(umaString.toLocaleLowerCase()); //RETORNA UMA STRING COM TODOS OS CARACTERS MINUSCULOS   
console.log(umaString.toLocaleUpperCase()); //RETORNA UMA STRING COM TODOS OS CARACTERES MAIUSCULOS
