// ATIVIDADE 5: Time Vencedor
let prompt = require("prompt-sync")()

let time1 = prompt("Insira o nome do primeiro time: ")
let time2 = prompt("Insira o nome do segundo time: ")
let gol_time1 = prompt("\nInsira quantos gols time " +time1+ " fez:")
let gol_time2 = prompt("Insira quantos gols o time " +time2+ " fez:")

if(gol_time1 > gol_time2){
    console.log("O time " +time1+ " venceu do " +time2+ " com: " +gol_time1+ " gols.")
} 

if(gol_time2 > gol_time1){
    console.log("O time " +time2+ " venceu do " +time1+ " com " +gol_time2+ " gols.")
}

if(gol_time1 == gol_time2){
    console.log("Os dois times empataram.")
}