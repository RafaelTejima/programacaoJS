// Aula 05 - Condições
let prompt = require("prompt-sync")();

console.log("Bem-vindo ao DETRAN!")
let idade = parseInt(prompt("Digite sua idade: "))

// Comparadores
// > Maior
// < Menor
// == Igual
// >= maior OU igual
// <= menor OU igual
// != diferente

if(idade >= 18){
    console.log("Você já tem idade para tirar CNH")
} else {
    console.log("Você ainda não pode tirar CNH, Volte depois...")
}
