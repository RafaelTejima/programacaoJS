// Aula 04 - Converter variáveis

/* let prompt = require("prompt-sync")()

let numero1 = prompt("Digite um número: ")
numero1 = parseInt(numero1)
let numero2 = prompt("Digite outro número: ")
numero2 = parseInt(numero2)
let soma = numero1 + numero2
console.log("O resultado é: " + soma )

*/

// ---------------------------------------------------
let prompt = require("prompt-sync")()

// Atividade 1

let data_nascimento = prompt("Digite o ano que voce nasceu: ")
data_nascimento = 2026 - data_nascimento
console.log("Atualmente você tem: "+ data_nascimento + " anos!" )

// Atividade 2

let nota1 = prompt("Vamos calcular a média de notas. Digite a primeira nota: ")
nota1 = parseInt(nota1)
let nota2 = prompt("Digite a segunda nota: ")
nota2 = parseInt(nota2)
let nota3 = prompt("Por fim, digite a última nota: ")
nota3 = parseInt(nota3)
let soma = nota1 + nota2 + nota3
let media = soma / 2

console.log("A média das notas é: " + media )

// Atividade 3
let produto = prompt("Digite o nome do seu produto: ")
let estoque = prompt("Digite o quanto você tem em estoque: ")
let preco = prompt("Digite o preço do seu produto: ")
let fatura = estoque * preco
console.log("Produto: " +produto+ + "\nQuantidade em estoque: " + estoque + "\nPreço: " +preco+ "\nFatura: " +fatura ) 