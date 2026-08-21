// Aula 05 - Porcentagem
let prompt = require("prompt-sync")()

let valor = parseFloat( prompt("Digite o valor: "))
let desconto = parseFloat (prompt("Digite  o desconto: "))
desconto = desconto / 100
let total = valor * desconto
let valor_com_desconto = valor - total

console.log(valor_com_desconto) 