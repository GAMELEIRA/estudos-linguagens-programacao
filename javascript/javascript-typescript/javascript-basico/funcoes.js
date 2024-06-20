function saudacao(nome) {
    console.log(`Olá ${nome}`);
}

function soma(num1 = 0, num2 = 0) {
    return num1 + num2;
}

const raiz1 = function(n) {
    return n ** 0.5;
}

const raiz2 = n => n ** 0.5;

saudacao('Gabriel');
console.log(soma(1, 2));
console.log(raiz1(1));
console.log(raiz2(1));
