/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 2000
let aumento = 500
let desconto_inss = 250
salario = salario + aumento - desconto_inss
console.log("seu salário é de: " + salario)