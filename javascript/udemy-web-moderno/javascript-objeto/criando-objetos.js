//usando notacao literal
const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPreComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
console.log(p1.getPreComDesconto());


//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase, 
        faltas,
        getSalario() {
            return (this.salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
console.log(f1.getSalario());

//JSON para objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}'); 
console.log(fromJSON.info);