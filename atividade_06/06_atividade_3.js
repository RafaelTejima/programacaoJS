// ATIVIDADE 3: IMC
let prompt = require("prompt-sync")()

let peso = parseFloat(prompt("Insira o seu peso: "))
let altura1 = parseFloat(prompt("Insira sua altura: "))
let IMC = peso / (altura1 * 2)

if(IMC <= 25.0){
    console.log("Seu índice de massa corporal é adequado. Meus parabéns!!" )
} else{
    console.log("Seu índice de massa corporal está acima do adequado. Hora de se exercitar!")
}