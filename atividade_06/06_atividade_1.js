// ATIVIDADE 1: Negativo ou Positivo
let prompt = require("prompt-sync")()

let numero = prompt("Digite um número: ")
if(numero >= 0 ){
    console.log("O numero " +numero+ " é positivo")
} else{
    console.log("O número " +numero+ " é negativo" )
}