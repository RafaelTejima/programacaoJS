/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

let percorrido =  250
let combustivel = 20
let preco_litro = 7
let consumo = percorrido / combustivel
let gasto = combustivel * preco_litro
console.log("A distância percorrida foi de " + percorrido + "km")
console.log("A quantidade de combustivel utilizado foi de " + combustivel + "L")
console.log("O preço do litro é de R$" + preco_litro)
console.log("O consumo total do carro foi de: R$" + consumo + "\nE o total gasto com combustível foi de: " + gasto + "L")
