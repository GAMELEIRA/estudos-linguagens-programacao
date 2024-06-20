const factoryPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade,
        toString() {
            return "Hello " + this.nome + " " + this.sobrenome + " " + this.idade + "."
        }
    }
}



const pessoa1 = factoryPessoa('Gabriel', 'Gameleira', 18);

console.log(pessoa1.toString());