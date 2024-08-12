// const numeros = [1,2,3,4,5,6,7]

// // Alteração nos valoes do array::
// const novos = numeros.map((numero) => numero*2)
// console.log({novos})

// // Filter: filtrar valores

// const numero2 = [1,2,3,4,5,6,7]

// const novos2 = numero2.filter((n) => n%2===0)

// console.log({novos2})

// // Reduce: Reduzir os elementos em um só

// const reduzido = numero2.reduce((total, numero) => total + numero,0 )

// console.log({reduzido})

// // Find- Econtrar elementos

// const pesquisa3 = numero2.find((n) => n ===3 )

// console.log(pesquisa3)

// //ForEach- Exibir na tela

// const nomes = ['paula','Joana','Marta']

// nomes.forEach((nome) => console.log(nome))

const numeros_de_teste = [1,2,3,4,5,6]

numeros_de_teste.forEach((n) => console.log(n));
const metodo_map = numeros_de_teste.map((n) => n*3)
const metodo_filter = numeros_de_teste.filter((n) => n>4)
const metodo_reduce = numeros_de_teste.reduce((n, total) => n+total)
const metodo_find = numeros_de_teste.find((n) => n%2!=0)


console.log(metodo_map)
console.log(metodo_filter)
console.log(metodo_reduce)
console.log(metodo_find)
