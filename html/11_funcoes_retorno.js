// Aula 11: Funções com retorno

somar(9, 8)

// Funções com parâmetros
function somar(num1, num2){
    let soma = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é: ${soma}`)
}



// funções vazias (void)
function somarNumeros(){
    let num1 = 5
    let num2 = 7
    let soma = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é: ${soma}`)
}

function numeroPositivo(){
    let num1 = 4
    let resposta = "negativo"

    if(num1 >= 0){
        resposta = "positivo"
    }

    console.log(`O número ${num1} e ${resposta}`)
}