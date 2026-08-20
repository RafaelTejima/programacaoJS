// Aula 06 - Praticas com condições
let prompt = require("prompt-sync")();

let preco_saopaulo = 125.50
let preco_araraquara = 68.90
let preco_seguro = 42.50


let total = 0

console.log("Escolha seu destino: ")
console.log("1 - São Paulo por R$" +preco_saopaulo)
console.log("2 - Araraquara por R$" +preco_araraquara)
let resposta = prompt("Digite uma opção: ")

if(resposta == "1"){
    total = preco_saopaulo
} else{
    total = preco_araraquara
}

let seguro = prompt("Deseja adicionar um seguro por mais R$"+preco_seguro+"?"+" :" )
if(seguro == "SIM"){
    total = total + preco_seguro
}

let cupom = prompt("Digite seu cupom de desconto: ")


if(cupom == "Conradito10"){
    console.log("Cupom de 10% aplicado!")
    let desconto = total * 0.10
    total = total - desconto
} else{
    console.log("Este cupom está inválido...")
}

let promocoes_email = prompt("Você gostaria de receber promoções no seu e-mail? ")
if(promocoes_email == "SIM"){
    console.log("Obrigado por se registrar, você recebera novos e-mails em breve.")
} else{
    console.log("Ok, você não receberá e-mails de promoções.")
}

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (acréscimo de 5%)")
console.log("2 - PIX (desconto de 5%)")
resposta = prompt("Escolha uma opção: ")


if(resposta == "1"){
    let acrescimo_cartao = total * 0.05
    total = total + acrescimo_cartao
} else{
    let desconto_pix = total * 0.05
    total = total - desconto_pix
}


console.log("\nO valor total da viagem é de: R$"+total.toFixed(2))
console.log("Obrigado, e volte sempre!")