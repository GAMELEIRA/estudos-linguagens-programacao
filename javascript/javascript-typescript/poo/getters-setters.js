class Carro {

    constructor(nome) {
        this.nome = nome;
        this._velocidade = 0;
    }

    get velocidade() {
        return this._velocidade;
    }

    acelerar() {
        this._velocidade++;
    }

    frear() {
        if (!(this.velocidade < 0)) {
            this._velocidade--;
        }
    }
}

const carro1 = new Carro('Carro 1');
carro1.acelerar();
carro1.acelerar();
carro1.velocidade = 0;
console.log(carro1.velocidade);