const usuario = {
    nome: "Alberto",
    idade: 13,
    Morada: "Angola"
}

const {nome,idade} = usuario

// Extrair intens de um obj

console.log(nome)
console.log(idade)

// Extrair itens do Array:

const numeros = [1,2,3,4,5]

const [a,b,c,d] = numeros

console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`)

function DadosUSuarios ({nome,idade}) {
    console.log(`Nome: ${nome}, Idade: ${idade}`)
}

DadosUSuarios(usuario)

const conta = {
    id: "1233",
    nome2: "Nelson",
    data: Date()
}

// console.table(conta)

const {id ,nome2, data} = conta

console.log(`Informaçõe da conta: ID: ${id} \n Nome do Usuario: ${nome2} \n Data de Criaçõa: ${data}`)

