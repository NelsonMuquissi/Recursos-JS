// Criação de Class

class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    apresenta(){
        console.log(`O nome do usuario é : ${this.nome} e tem : ${this.idade} idade`)
    }
}

const pessoa = new Pessoa("Nelson",10)

// pessoa.apresenta()

class Funcionario extends Pessoa {
    constructor(nome, idade, salario){
        super(nome,idade)
        this.salario = salario
    }

    apresentaFunc(){
        console.log(`O nome do usuario é : ${this.nome}, salario é: ${this.salario} e tem : ${this.idade} idade`)
    }
}

const funcionario = new Funcionario("Carla Pedro",19, 10000)

// funcionario.apresentaFunc()

class Carro {
    constructor(marca,cor,modelo){
        this.marca = marca
        this.cor = cor
        this.modelo = modelo
    }

    informações(){
        console.log(`Informações do carro: ${this.marca}, ${this.cor}, ${this.modelo}`)
    }
}

const carro = new Carro("BMW", "Black", "X")

class Novomodelo  extends Carro{
    constructor(marca,cor,modelo, estado){
        super(marca,cor,modelo)
        this.estado = estado
    }

    informações_nova(){
        console.log(`Informações novas do carro: marca: ${this.marca}, cor: ${this.cor}, modelo: ${this.modelo}, estado: ${this.estado}`)
    }
}

const novomodelo = new Novomodelo("BMW", "Black", "X3", "Funcional")

novomodelo.informações_nova()

carro.informações()
