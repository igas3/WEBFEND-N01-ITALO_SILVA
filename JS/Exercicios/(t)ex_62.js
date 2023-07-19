// Crie um programa que preencha um array com os múltiplos de 3 de 1 a 30 e exiba os valores no console.

let numeros = []

let i = 0;

while (i<= 30){ 
if (i % 3===0){
    numeros.push(i)
}
i++
}
console.log(numeros);