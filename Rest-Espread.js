// // Rest

// function SomaNumeros(...numeros){
//     return numeros.reduce((total, numero) => total + numero) 
// }

// console.log("A soma é:",SomaNumeros(1,2,4,5,56,6))

// // Espread

// const n1 = [1,2,3,4,5]
// const n2 = [6,7,8,9,10]

// const ValoresCombinados = [...n1 , ...n2]

// console.log({ValoresCombinados})

// const esPEndereço = {
//     nome: "ANA"
// }

// const DadosEndereço = {...esPEndereço, endereço:"Rua 1"}

// console.log({DadosEndereço})

function soma(...num){
    return num.reduce((n,total) => total+n)
}

console.log(soma(1,2,3))