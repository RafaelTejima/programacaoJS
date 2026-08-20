// ATIVIDADE 4: João Papo-de-Pescador
let prompt = require("prompt-sync")()

let peixes = parseFloat(prompt("Insira o peso dos peixes pescados: "))
let excesso = parseFloat(50.0)

if(peixes >= excesso){
    let preco_multa = parseFloat(4.25)
    peixes = peixes - excesso
    peixes = peixes * preco_multa
    console.log("O peso dos peixes está fora dos limites. Multa de: " +peixes)

} else{
    peixes = peixes - excesso
    console.log("O peso dos peixes está dentro dos limites. Não terá que pagar multa.")
}
