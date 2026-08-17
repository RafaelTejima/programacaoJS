/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let produto1 = "Perfume"
let preco1 = 49.99

let produto2 = "Creme Hidratante"
let preco2 = 35.99

let total = preco1 + preco2
console.log("Seu carrinho:\n")
console.log(produto1 + "\nR$" + preco1 + "\n" + "\n" + produto2 + "\nR$" + preco2)
console.log("\nO valor total a se pagar é de: R$" + total )