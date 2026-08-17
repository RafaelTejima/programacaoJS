/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 2000
console.log("Bom dia! Seu salário é de: R$" + salario)

let aumento = 500
salario = (salario + aumento)
console.log("\nMeus parabéns pelo seu aumento. Seu salário atual é de: R$" + salario)

let desconto_inss = 250
salario = salario - desconto_inss
console.log("mas como a vida não é um morango do amor, será descontado R$250 de seu salário pelo INSS.")
console.log("Sendo assim, seu salário atual é de: R$" + salario )

