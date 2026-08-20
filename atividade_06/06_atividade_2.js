// ATIVIDADE 2: O maior número
let prompt = require("prompt-sync")()

let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número e veja o resultado: ")

if(numero1 >= numero2){
    console.log("O número " +numero1+ " é maior que " +numero2+ ".")
} else{
    console.log("O número "+numero1+" é menor que " +numero2+ ".")
}