// Aula 05 - Atividade: Lanchonete
let prompt = require("prompt-sync")()


// Lista de ingredientes: 
let ingrediente1 = "Pão"
let ingrediente2 = "Salsicha"
let ingrediente3 = "Purê de batata"
let ingrediente4 = "Queijo"
let ingrediente5 = "Bacon"

console.log("=======================================")
console.log("CADASTRO DE PREÇOS - CONRADITO DOGUEZITO")
console.log("=======================================")

// Produtos:

let produto1 = "CACHORRO-QUENTE COM PURÊ"
let produto2 = "CACHORRO-QUENTE CREMOSO"
let produto3 = "CACHORRO-QUENTE ESPECIAL"
let combo = "COMBO DOGÃO"

console.log("=======================================")
console.log("   CARDÁPIO CONRADITO DOGUEZITO   ")
console.log("=======================================")

// Solicitação de preços:
 
let preco_ing1 = prompt("Informe o preço do " +ingrediente1+ ": ")
preco_ing1 = parseFloat(preco_ing1)
let preco_ing2 = prompt("Informe o preço do " +ingrediente2+ ": ")
preco_ing2 = parseFloat(preco_ing2)
let preco_ing3 = prompt("Informe o preço do " +ingrediente3+ ": ")
preco_ing3 = parseFloat(preco_ing3)
let preco_ing4 = prompt("Informe o preço do " +ingrediente4+ ": ")
preco_ing4 = parseFloat(preco_ing4)
let preco_ing5 = prompt("Informe o preço do " +ingrediente5+ ": ")
preco_ing5 = parseFloat(preco_ing5)

// Operações:

let total_prod1 = preco_ing1 + preco_ing2 + preco_ing3 + preco_ing5
total_prod1 = parseFloat(total_prod1)
let total_prod2 = preco_ing1 + (preco_ing2 * 2) + preco_ing4
total_prod2 = parseFloat(total_prod2)
let total_prod3 = preco_ing1 + preco_ing2 + preco_ing3 + preco_ing4 + preco_ing5
total_prod3 = parseFloat(total_prod3)
let total_combo = total_prod1 + total_prod2 + total_prod3
total_combo = parseFloat(total_combo)

// Porcentagem de lucro: 

let valor = prompt("Informe a porcentagem de lucro desejada: ")