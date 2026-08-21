// Aula 04: INPUT


let prompt = require("prompt-sync")()

let nome = prompt("Olá, Digite o seu nome: ")
let sobrenome = prompt("Agora digite o seu sobrenome: ")
let idade = prompt("Para finalizar, digite a sua idade: ")
let nome_completo = nome + " " + sobrenome


console.log("Bem-vindo! " + nome_completo + " você tem " + idade + " anos xD!")

console.log("\n\n")

let produto1 = prompt("Digite o nome de um produto: ")
let preco1 = prompt("Digite o preço de " + produto1 + " R$ " )
let produto2 = prompt("Digite o nome de outro produto: ")
let preco2 = prompt("Digite o preço de " + produto2 + " R$ ")

console.log("\n----- RELATÓRIO -----")
console.log("\n" + produto1 + " - R$" + preco1)
console.log(produto2 + " - R$" + preco2)