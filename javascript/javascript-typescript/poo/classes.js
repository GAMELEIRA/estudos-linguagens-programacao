class Pessoa {
    
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        return `${this.nome} está falando!`;
    }

    comer() {
        return `${this.nome} está comendo`;
    }

    beber() {
        return `${this.nome} está bebendo`;
    }
}

const pessoa1 = new Pessoa('Gabriel', 'Gameleira');